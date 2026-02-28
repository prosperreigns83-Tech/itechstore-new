
document.addEventListener("DOMContentLoaded", function () {

  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("themeToggleBtn");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    btn.textContent = "Dark Mode";
  } else {
    btn.textContent = "Light Mode";
  }

});

function toggleTheme() {

  const btn = document.getElementById("themeToggleBtn");

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    btn.textContent = "Dark Mode";
  } else {
    localStorage.setItem("theme", "dark");
    btn.textContent = "Light Mode";
  }

}








// document.addEventListener("DOMContentLoaded", function () {

//   const savedTheme = localStorage.getItem("theme");
//   const btn = document.getElementById("themeToggleBtn");

//   if (savedTheme === "dark") {
//     document.body.classList.add("dark-mode");
//     btn.textContent = "Light Mode";
//   } else {
//     btn.textContent = "Dark Mode";
//   }

// });

// function toggleTheme() {

//   const btn = document.getElementById("themeToggleBtn");

//   document.body.classList.toggle("dark-mode");

//   if (document.body.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark");
//     btn.textContent = "Light Mode";
//   } else {
//     localStorage.setItem("theme", "light");
//     btn.textContent = "Dark Mode";
//   }

// }







