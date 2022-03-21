var signIn = document.getElementById("login");
var signUp = document.getElementById("register");
var toggleButton = document.getElementById("btn");

function register() {
    signIn.style.left = "-400px";
    signUp.style.left = "50px";
    toggleButton.style.left = "110px";
}
function login() {
    signIn.style.left = "50px";
    signUp.style.left = "450px";
    toggleButton.style.left = "0px";
}
function validateloginform(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email_id = document.forms['loginForm']['Email Id'].value.trim();

    if (!email_id.match(mailformat)) {
        alert("Invalid email address!");
        return false;
    }
}
function validateform() {
    console.log("Entering validation");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let name = document.forms['regForm']['Name'].value.trim();
    let college_name = document.forms['regForm']['College Name'].value.trim();
    let degree = document.forms['regForm']['Degree'].value.trim();
    let branch = document.forms['regForm']['Branch'].value.trim();
    let yr_of_study = document.forms['regForm']['Year of study'].value.trim();
    let email_id = document.forms['regForm']['Email Id'].value.trim();
    let userpassword = document.forms['regForm']['User Password'].value.trim();
    let confirmpassword = document.forms['regForm']['Confirm Password'].value.trim();
    let phonenumber = document.forms['regForm']['Phone Number'].value.trim();
    let regnumber = document.forms['regForm']['Reg Number'].value.trim();

    if (name == "" || name.length < 3) {
        alert("Name must contain atleast 3 characters");
        return false;
    }
    else if (!/^[a-zA-Z]*$/g.test(name)) {
        alert("Invalid Name");
        return false;
    }
    else if(regnumber == ""){
        alert("Enter your Register/Roll Number");
        return false;
    }
    else if (degree == "") {
        alert("Degree must be filled");
        return false;
    }
    else if (branch == "") {
        alert("Branch must be filled");
        return false;
    }
    else if (parseInt(yr_of_study) > 5 || parseInt(yr_of_study) <= 0 || isNaN(parseInt(yr_of_study))) {
        alert("Enter correct year of study");
        return false;
    }
    else if (college_name == "") {
        alert("College name must be filled");
        return false;
    }
    else if (parseInt(phonenumber) == NaN || phonenumber.length != 10) {
        alert("Enter correct phone number !! ");
        return false;
    }
    else if (!email_id.match(mailformat)) {
        alert("Invalid email address!");
        return false;
    }
    else if (userpassword == "") {
        alert("User Password cannot be empty");
        return false;
    }
    else if (!passwordPattern.test(userpassword)) {
        alert("Password must contains atleast one number and one special character!");
        return false;
    }
    else if (confirmpassword != userpassword) {
        alert("Confirm password must be same as user password");
        return false;
    }
     
}