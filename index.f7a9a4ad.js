const e=document.querySelector("#theme-switch-toggle"),t=document.querySelector("body"),s="light-theme",a="dark-theme";e.addEventListener("change",(function(){t.classList.contains(s)?(t.classList.add(a),t.classList.remove(s)):t.classList.contains(a)&&(t.classList.add(s),t.classList.remove(a));localStorage.setItem("themeValue",t.classList.value)})),localStorage.getItem("themeValue")?t.classList.add(localStorage.getItem("themeValue")):t.classList.add(s);
//# sourceMappingURL=index.f7a9a4ad.js.map
