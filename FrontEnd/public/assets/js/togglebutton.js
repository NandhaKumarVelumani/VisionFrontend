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
function show_hide1() {
   document.getElementById("button-631").style.fontWeight="900";
   document.getElementById("button-631").style.color="#000000";
   document.getElementById("button-631").style.backgroundColor="white";
   document.getElementById("button-631").style.opacity="1";

   document.getElementById("button-632").style.fontWeight="bold";
    document.getElementById("button-632").style.color="#000000";
    document.getElementById("button-632").style.backgroundColor="#ee9d34";
    document.getElementById("button-632").style.opacity="0.2";

    document.getElementById("toggle1").style.display="inline";
    document.getElementById("toggle2").style.display="none";
}
function show_hide2() {
  document.getElementById("button-632").style.fontWeight="900";
   document.getElementById("button-632").style.color="#000000";
   document.getElementById("button-632").style.backgroundColor="white";
   document.getElementById("button-632").style.opacity="1";

   document.getElementById("button-631").style.fontWeight="bold";
    document.getElementById("button-631").style.color="#000000";
    document.getElementById("button-631").style.backgroundColor="#ee9d34";
    document.getElementById("button-631").style.opacity="0.2";

  document.getElementById("toggle2").style.display="inline";
  document.getElementById("toggle1").style.display="none";
}

