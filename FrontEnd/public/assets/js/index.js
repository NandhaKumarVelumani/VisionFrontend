//-----nav links------
const navLinks = document.getElementById("navLinks");
const submitBtn = document.querySelector(".btn");
const allInputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const operationsContent = document.querySelectorAll(".operations__content");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
