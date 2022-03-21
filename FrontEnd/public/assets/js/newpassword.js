function validateloginform(){

    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let userpassword = document.forms['New password']['User Password'].value.trim();
    let confirmpassword = document.forms['New password']['Confirm Password'].value.trim();

    if (userpassword == "") {
            alert("New Password cannot be empty");
            return false;
        }
        else if (!passwordPattern.test(userpassword)) {
            alert("Password must contains atleast one number and one special character!");
            return false;
        }
        else if (confirmpassword != userpassword) {
            alert("Confirm password must be same as new password");
            return false;
        }
    }