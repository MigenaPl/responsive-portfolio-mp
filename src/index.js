function switchTheme() {
  let body = document.querySelector("body");
  // body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector("#theme-switch-btn");
themeButton.addEventListener("click", switchTheme);
