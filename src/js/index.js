import "../scss/index.scss";

console.log("js is loaded");

let mobileMenu = document.getElementById("mobile-menu");
let hamburgerbtn = document.getElementById("hamburger-button");
hamburgerbtn.addEventListener("click", openNav);
let closebtn = document.getElementById("close-button");
closebtn.addEventListener("click", closeNav);
console.log(mobileMenu);

// mobileMenu.onclick = () => {
//   mobileMenu.style.width = "100%";
//   console.log("opening menu");
// };

function openNav() {
  mobileMenu.style.left = "0%";
  console.log("opening menu");
}
function closeNav() {
  mobileMenu.style.left = "100%";
  console.log("opening menu");
}
