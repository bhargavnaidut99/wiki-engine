let loginSectionEl = document.getElementById("loginSection");
let searchSectionEl = document.getElementById("searchSection");
let registerSectionEl = document.getElementById("registerSection");
let resultsSectionEl = document.getElementById("resultsSection");
let loginButtonEl = document.getElementById("loginButton");

let notificationsEl = document.getElementById('notifications');



function createToast(type, icon, title, text) {
    console.log("ok");
    let newToast = document.createElement('div');

    newToast.innerHTML = `

            <div class="toast ${type}">

                <i class="${icon}"></i>

                <div class="content">

                    <div class="title">${title}</div>

                    <span>${text}</span>

                </div>

                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>

            </div>`;

    notificationsEl.appendChild(newToast);

    newToast.timeOut = setTimeout(

        () => newToast.remove(), 5000

    );

}

function successAlert(type, icon, title, text) {

    createToast(type, icon, title, text);

}

function errorAlert(type, icon, title, text) {

    createToast(type, icon, title, text);

}

function redirectSearchPage(event) {
    event.preventDefault(); // Prevent default form submission

    const emailVal = document.getElementById('loginEmail').value;

    const passwordVal = document.getElementById('loginPassword').value;


    if (emailVal === "") {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Please fill in the email field.');
        return;
    }
    if (!emailVal.includes("@")) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Please enter a valid email address.');
        return;
    }
    if (passwordVal.length < 8) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Password must be at least 8 characters long!');
        return;
    }

    const hasUpperCase = /[A-Z]/.test(passwordVal);
    const hasLowerCase = /[a-z]/.test(passwordVal);
    const hasNumber = /[0-9]/.test(passwordVal);
    const hasSpecialChar = /[!@#\$%\^&\*]/.test(passwordVal);

    if (!hasUpperCase) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Password must include at least one uppercase letter.');
        return;
    }
    if (!hasLowerCase) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Password must include at least one lowercase letter.');
        return;
    }
    if (!hasNumber) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Password must include at least one number.');
        return;
    }
    if (!hasSpecialChar) {
        errorAlert('error', 'fa-solid fa-circle-exclamation', 'Error', 'Password must include at least one special character.');
        return;
    }

    successAlert('success', 'fa-solid fa-circle-check', 'Success', 'You are successfully logged in!');
    loginSectionEl.classList.toggle("d-none");
    resultsSectionEl.classList.toggle("d-none");
}

loginButtonEl.onclick = function() {
    redirectSearchPage(event);
};


function redirectRegisterPage() {
    loginSectionEl.classList.toggle("d-none");
    registerSectionEl.classList.toggle("d-none");
}

function redirectLoginPage() {
    registerSectionEl.classList.toggle("d-none");
    loginSectionEl.classList.toggle("d-none");
}

function redirectThisPage() {
    loginSectionEl.classList.toggle("d-none")
    resultsSectionEl.classList.toggle("d-none")

}