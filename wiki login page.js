let loginSectionEl = document.getElementById("loginSection");
let searchSectionEl = document.getElementById("searchSection");
let registerSectionEl = document.getElementById("registerSection");
let resultsSectionEl = document.getElementById("resultsSection");


function redirectSearchPage() {
    event.preventDefault(); // Prevent default form submission

    const loginEmailVal = document.getElementById('loginEmail').value;

    const loginPasswordVal = document.getElementById('loginPassword').value;


    if (loginEmailVal === "") {
        alert('Please fill in the email field.');
        return;
    }
    if (!loginEmailVal.includes("@")) {
        alert('Please enter a valid email address.');
        return;
    }
    if (loginPasswordVal.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    const loginHasUpperCase = /[A-Z]/.test(loginPasswordVal);
    const loginHasLowerCase = /[a-z]/.test(loginPasswordVal);
    const loginHasNumber = /[0-9]/.test(loginPasswordVal);
    const loginHasSpecialChar = /[!@#\$%\^&\*]/.test(loginPasswordVal);

    if (!loginHasUpperCase) {
        alert('Password must include at least one uppercase letter.');
        return;
    }
    if (!loginHasLowerCase) {
        alert('Password must include at least one lowercase letter.');
        return;
    }
    if (!loginHasNumber) {
        alert('Password must include at least one number.');
        return;
    }
    if (!loginHasSpecialChar) {
        alert('Password must include at least one special character.');
        return;
    }

    alert('You are successfully logged in!');
    loginSectionEl.classList.toggle("d-none");
    resultsSectionEl.classList.toggle("d-none");
}




function redirectRegisterPage() {
    loginSectionEl.classList.toggle("d-none");
    registerSectionEl.classList.toggle("d-none");
}

function redirectLoginPage() {

    event.preventDefault(); // Prevent default form submission

    const registerEmailVal = document.getElementById('registerEmail').value;

    const registerPasswordVal = document.getElementById('registerPassword').value;

    const registerRePasswordVal = document.getElementById('registerRepassword').value;

    if (registerEmailVal === "") {
        alert('Please fill in the email field.');
        return;
    }
    if (!registerEmailVal.includes("@")) {
        alert('Please enter a valid email address.');
        return;
    }
    if (registerPasswordVal.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    const registerHasUpperCase = /[A-Z]/.test(registerPasswordVal);
    const registerHasLowerCase = /[a-z]/.test(registerPasswordVal);
    const registerHasNumber = /[0-9]/.test(registerPasswordVal);
    const registerHasSpecialChar = /[!@#\$%\^&\*]/.test(registerPasswordVal);

    if (!registerHasUpperCase) {
        alert('Password must include at least one uppercase letter.');
        return;
    }
    if (!registerHasLowerCase) {
        alert('Password must include at least one lowercase letter.');
        return;
    }
    if (!registerHasNumber) {
        alert('Password must include at least one number.');
        return;
    }
    if (!registerHasSpecialChar) {
        alert('Password must include at least one special character.');
        return;
    }
    if (registerRePasswordVal !== registerPasswordVal) {
        alert("The passwords you entered do not match. Please ensure both password fields contain the same password and try again.");

    }

    alert("You've successfully registered! You can now log in.");

    registerSectionEl.classList.toggle("d-none");
    loginSectionEl.classList.toggle("d-none");
}

function redirectThisPage() {
    loginSectionEl.classList.toggle("d-none")
    resultsSectionEl.classList.toggle("d-none")

}
