function replaceName() {
    let name = prompt("Hi! How should we call you?", "");
    document.getElementById("nickname").innerHTML = "Hi " + name + "! ";
}
replaceName()

function validateForm() {
    const name = document.forms["messageUs"]["name"].value;
    const email = document.forms["messageUs"]["email"].value;
    const phone = document.forms["messageUs"]["phone"].value;
    const birth = document.forms["messageUs"]["birth"].value;
    const gender = document.forms["messageUs"]["gender"].value;
    const message = document.forms["messageUs"]["messagge"].value;

    if (name=="" || email=="" || phone=="" || birth=="" || gender=="" || message=="") {
        document.getElementById("error").innerHTML = "Please finish up the form before submitting.";
        return false;
    }
    else {
        document.getElementById("senderName").innerHTML = "Full Name: " + name;
        document.getElementById("senderEmail").innerHTML = "Email: " + email;
        document.getElementById("senderPhone").innerHTML = "Phone Number: " + phone;
        document.getElementById("senderBirth").innerHTML = "Date of Birth: " + birth;
        document.getElementById("senderGender").innerHTML = "Gender: " + gender;
        document.getElementById("senderMessage").innerHTML = "Message: " + message;
    }
}

