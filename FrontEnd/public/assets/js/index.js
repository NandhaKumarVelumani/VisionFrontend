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
  allInputs.forEach((inps) => {
    inps.value = "";
  });
  textarea.value = "";
});

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  //if closest returns null clicked will be null
  //because closest returns the parent element and if not returns the same element
  //HERE both cases dont exist
  //guard Clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active"); //if you click on the number due to span
  //tag it is also a child. so e.target returns the span tag not the tab
  //FIX
  //change line 5 to e.target.closest('.operations__tab ')

  //NOW change the content
  operationsContent.forEach((c) =>
    c.classList.remove("operations__content--active")
  );
  const currentTab = clicked.dataset.tab;
  document
    .querySelector(`.operations__content--${currentTab}`)
    .classList.add("operations__content--active");
});
