const e=document.querySelector("#theme-switch-toggle"),t=document.querySelector("body"),c="light-theme",o="dark-theme";function a(e){t.classList.value="",t.classList.add(e),localStorage.setItem("Theme",e)}e.addEventListener("change",(()=>{e.checked?a(o):a(c)})),localStorage.getItem("Theme")&&localStorage.getItem("Theme")===o&&(a(o),e.checked=!0);
//# sourceMappingURL=index.ca51ed9c.js.map
