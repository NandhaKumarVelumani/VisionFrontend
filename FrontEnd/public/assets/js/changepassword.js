function validateloginform() {

    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let newpassword = document.forms['Change password']['New Password'].value.trim();
    let userpassword = document.forms['Change password']['User Password'].value.trim();
    let confirmpassword = document.forms['Change password']['Confirm Password'].value.trim();

    if (userpassword == newpassword) {
        alert("New password cannot be same as current password!!");
        return false;
    }
    else if (newpassword == "") {
        alert("New Password cannot be empty");
        return false;
    }
    else if (!passwordPattern.test(newpassword)) {
        alert("Password must contains atleast one number and one special character!");
        return false;
    }
    else if (confirmpassword != newpassword) {
        alert("Confirm password must be same as new password");
        return false;
    }
}