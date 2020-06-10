
function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let inquiry = document.getElementById("inquiry").value;
    let errorMessage = document.getElementById("error-message");
    let text;

    errorMessage.style.padding = "1rem";

    if (name.length < 5){
        text = "Please enter valid name";
    }
    else if (email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter valid email";
    }
    else if (inquiry.length > 200){
        text = "Please enter valid inquiry";
    }

    errorMessage.innerHTML = text;

    alert("Form Submitted Successfully!");
    return true;
}