
function showRegistrationForm() {

    event.preventDefault();

    document.getElementById("login-form").style.display = "none";

    document.getElementById("register-form").style.display = "block";
}


function showLoginForm() {

    event.preventDefault();

    document.getElementById("login-form").style.display = "block";

    document.getElementById("register-form").style.display = "none";
}

