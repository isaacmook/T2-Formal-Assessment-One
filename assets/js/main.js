function regAcc() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('contact').value;
    var subject = document.getElementById('subject').value;
    var checkbox = document.getElementById('checkbox').checked;

    if (!checkbox) {
        var message = "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + " " + surname + "! If you want to sign up, you better CHECK that newsletter box!";
        alert(message);
        return false; // Prevent form submission
    } else {
        var message = "Welcome " + name + " " + surname + "! Thank you for your interest in " + subject + "!\n\nWe will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".";
        alert(message);
    }
}


