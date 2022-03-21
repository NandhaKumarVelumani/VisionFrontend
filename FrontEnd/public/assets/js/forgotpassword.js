function validateloginform(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email_id = document.forms['forgot password']['Email Id'].value.trim();

    if (!email_id.match(mailformat)) {
        alert("Invalid email address!");
        return false;
    }
}