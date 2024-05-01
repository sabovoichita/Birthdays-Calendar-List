(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>d});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,'html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(156, 153, 155);\n}\n\nsection {\n  flex: 1;\n  padding: 15px;\n}\n\nheader {\n  /* background-image: url(/images/cake.webp); */\n}\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\nheader img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n#header-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(90deg, #8b8488, transparent);\n}\n#header-info {\n  padding: 10px;\n  text-shadow: 1px 1px 2px #e5dcdc;\n}\n\nh1 {\n  color: rgb(247, 238, 238);\n  margin: 5px 0;\n  /* font-weight: 300px;\n  font-size: 1.8em; */\n}\nh2,\nh3 {\n  color: black;\n  margin: 5px 0;\n  font-weight: 300px;\n  font-size: 1.2em;\n}\n\n#birthdayTable {\n  width: 100%;\n  border-collapse: collapse;\n}\n#birthdayTable th,\n#birthdayTable td {\n  border: 1px solid rgb(129, 121, 129);\n  padding: 5px;\n  line-height: 30px;\n  color: rgb(109, 98, 98);\n}\n#birthdayTable th {\n  color: rgb(240, 230, 230);\n  font-size: 1.4rem;\n  background-color: #490c32;\n}\n\n#birthdayTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n  color: #094b0e;\n}\n\n#birthdayTable input {\n  width: 100%;\n}\n#birthdayTable tfoot input:not([type="image" i]) {\n  box-sizing: border-box;\n}\n\n.table-actions {\n  width: 90px;\n}\n\n.tbar {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.tbar label {\n  padding: 0 5px;\n}\n\n.tfill {\n  flex: 1;\n}\n.action-btn {\n  cursor: pointer;\n  min-width: 35px;\n}\n\n.edit-btn {\n  display: none;\n  color: #094b0e;\n}\n\n.delete-btn {\n  display: none;\n  color: #ea1010;\n}\n\n#birthdayTable tr:hover .action-btn {\n  display: inline-block;\n}\n\nfooter {\n  background-color: rgb(148, 131, 141);\n  color: #fff;\n  text-align: center;\n  padding: 7px;\n}\n.mark {\n  background-color: #947688;\n}\n',""]);const d=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=e(a[i]);t[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),i=e.n(a),d=e(56),c=e.n(d),s=e(540),l=e.n(s),u=e(113),p=e.n(u),f=e(208),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const b="sabovoichita.github.io"===location.host,m={CREATE:{URL:"http://localhost:3000/birthdays-json/create",METHOD:"POST"},READ:{URL:"http://localhost:3000/birthdays-json",METHOD:"GET"},UPDATE:{URL:"http://localhost:3000/birthdays-json/update",METHOD:"PUT"},DELETE:{URL:"http://localhost:3000/birthdays-json/delete",METHOD:"DELETE"}};let g,v=[];function y(n){return document.querySelector(n)}function E(n){const t=n.url,e=t.startsWith("https://www")?t.substring(12):t;return`<tr>\n  <td>${n.name}</td>\n  <td>${n.contact}</td>\n  <td>${n.age}</td>\n  <td>\n  <a href = " ${t}"  target = "_blank">${e}</a>\n  </td>\n  <td>${n.dob}</td>\n  <td>\n  <button type="button" data-id="${n.id}" class="action-btn edit-btn" title="edit">🖍</button>\n  <button type="button" data-id="${n.id}" class="action-btn delete-btn" title="recycle">♻</button>\n\n  </td>\n</tr>`}b&&(m.READ.URL="./data/birthdays.json",m.DELETE.URL="./data/delete.json",m.CREATE.URL="./data/create.json",m.UPDATE.URL="./data/update.json",m.DELETE.METHOD="GET",m.CREATE.METHOD="GET",m.UPDATE.METHOD="GET");let T=[];function x(n){if(function(n,t){return n===t||!(n.length!==t.length||!n.every(((n,t)=>n===n[t])))}(T,n))return;const t=n.map(E);y("#birthdayTable tbody").innerHTML=t.join("")}y("#search").addEventListener("input",(n=>{const t=n.target.value,e=function(n,t){return t=t.toLowerCase(),n.filter((n=>n.name.toLowerCase().includes(t)||n.contact.toLowerCase().includes(t)||n.age.toLowerCase().includes(t)||n.url.toLowerCase().includes(t)||n.dob.toLowerCase().includes(t)))}(v,t);x(e)})),y("#birthdayForm").addEventListener("submit",(function(n){n.preventDefault();const t={name:y("input[name=name]").value,contact:y("input[name=contact]").value,age:y("input[name=age]").value,url:y("input[name=url]").value,dob:y("input[name=dob]").value};g?(t.id=g,function(n){return fetch(m.UPDATE.URL,{method:m.UPDATE.METHOD,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(t).then((n=>{n.success&&(t.id=n.id,v=v.map((n=>n)),v.push(t),x(v),y("#birthdayForm").reset())}))):function(n){return fetch(m.CREATE.URL,{method:m.CREATE.METHOD,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(t).then((n=>{n.success&&window.location.reload()}))})),y("#birthdayForm").addEventListener("reset",(()=>{g=void 0})),y("#birthdayTable tbody").addEventListener("click",(n=>{if(n.target.matches("button.delete-btn")){const t=n.target.dataset.id;(function(n){return fetch(m.DELETE.URL,{method:m.DELETE.METHOD,headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((n=>n.json()))})(t).then((n=>{n.success&&(v=v.filter((n=>n.id!==t)),x(v))}))}else n.target.matches("button.edit-btn")&&(t=n.target.dataset.id,g=t,e=v.find((n=>n.id===t)),y("input[name=name]").value=e.name,y("input[name=contact]").value=e.contact,y("input[name=age]").value=e.age,y("input[name=url]").value=e.url,y("input[name=dob]").value=e.dob);var t,e})),fetch(m.READ.URL,{method:m.READ.METHOD,headers:{"Content-Type":"application/json"}}).then((n=>n.json().then((n=>{v=n,x(n)}))))})()})();