import "./style.css";

let editId;
let allBirthdays = [];

function $(selector) {
  return document.querySelector(selector);
}

function createBirthdayRequest(birthday) {
  return fetch("http://localhost:3000/birthdays-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(birthday)
  }).then(r => r.json());
}

function deleteBirthdayRequest(id) {
  return fetch("http://localhost:3000/birthdays-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

function updateBirthdayRequest(birthday) {
  return fetch("http://localhost:3000/birthdays-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(birthday)
  }).then(r => r.json);
}

function getBirthdayAsHTML(birthday) {
  return `<tr>
  <td>${birthday.name}</td>
  <td>${birthday.contact}</td>
  <td>${birthday.age}</td>
  <td>${birthday.url}</td>
  <td>${birthday.dob}</td>
  <td>
  <button type="button" data-id="${birthday.id}" class="action-btn edit-btn" title="edit">🖍</button>
  <button type="button" data-id="${birthday.id}" class="action-btn delete-btn" title="recycle">♻</button>

  </td>
</tr>`;
}

function renderBirthdays(birthdays) {
  const birthdayHTML = birthdays.map(getBirthdayAsHTML);
  $("#birthdayTable tbody").innerHTML = birthdayHTML.join("");
}

function loadBirthdays() {
  fetch("http://localhost:3000/birthdays-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r =>
    r.json().then(birthdays => {
      allBirthdays = birthdays;
      renderBirthdays(birthdays);
    })
  );
}
function onSubmit(e) {
  // console.warn("submit", e);
  e.preventDefault();

  const birthday = getBirthdayValues();

  if (editId) {
    birthday.id = editId;
    console.warn("should we edit?", editId, birthday);
    updateBirthdayRequest(birthday).then(status => {
      // console.warn("status", status);
      if (status.success) {
        window.location.reload();
      }
    });
  } else
    createBirthdayRequest(birthday).then(status => {
      // console.warn("status", status);
      if (status.success) {
        window.location.reload();
      }
    });
}

function startEdit(id) {
  editId = id;
  const birthday = allBirthdays.find(birthday => birthday.id === id);
  console.warn("edit", id, birthday);
  setBithdayValues(birthday);
}

function getBirthdayValues() {
  const name = $("input[name=name]").value;
  const contact = $("input[name=contact]").value;
  const age = $("input[name=age]").value;
  const url = $("input[name=url]").value;
  const dob = $("input[name=dob]").value;

  return {
    name: name,
    contact: contact,
    age: age,
    url,
    dob
  };
}

function setBithdayValues(birthday) {
  $("input[name=name]").value = birthday.name;
  $("input[name=contact]").value = birthday.contact;
  $("input[name=age]").value = birthday.age;
  $("input[name=url]").value = birthday.url;
  $("input[name=dob]").value = birthday.dob;
}

function initEvents() {
  $("#birthdaysForm").addEventListener("submit", onSubmit);

  $("#birthdayTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const id = e.target.dataset.id;
      deleteBirthdayRequest(id).then(status => {
        if (status.success) {
          window.location.reload();
        }
      });
    } else if (e.target.matches("button.edit-btn")) {
      const id = e.target.dataset.id;

      startEdit(id);
    }
  });
}
initEvents();
loadBirthdays();
