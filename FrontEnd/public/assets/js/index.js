//-----nav links------
const navLinks = document.getElementById("navLinks");
const submitBtn = document.querySelector(".btn");
const allInputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const contentdiv = document.querySelector(".content");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    allInputs.forEach(inps => {
        inps.value = ''
    })
    textarea.value = ''
})
