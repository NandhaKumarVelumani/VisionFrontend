const button = document.querySelector(".btn");
const message = "Successful!";

button.addEventListener("click", (e) => {
    e.preventDefault();
    swal(message, "", "success");
    console.log('test')
})