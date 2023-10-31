export function AllLoginJS() {
    const loginForm = document.getElementById('login-form');
    const contentContainer = document.getElementById('content-container');
    const hideMe = document.getElementById('hide-me');
    const hideMe2 = document.getElementById('hide-me2');

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate a successful login
        if (username === "Hello" && password === "1234") {
            document.querySelector('.login-wrapper').style.display = 'none';
            hideMe.style.display = 'flex';
            hideMe2.style.display = 'inline-block';
            contentContainer.style.display = 'block';
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
//-------------------------------------------------------------------------------------------------
    //logintoggle

    document.addEventListener("DOMContentLoaded", function () {
        const loginContent = document.querySelector(".login-content");
        const registerContent = document.querySelector(".register-content");
        const registerLink = document.querySelector(".register-link");
        const loginLink = document.querySelector(".login-link");

        // Add an event listener to the "Register" link
        registerLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Hide the login form smoothly and show the registration form smoothly
            loginContent.classList.add("hidden");
            registerContent.classList.remove("hidden");
        });

        // Add an event listener to the "Login" link within the registration form
        loginLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Hide the registration form smoothly and show the login form smoothly
            registerContent.classList.add("hidden");
            loginContent.classList.remove("hidden");
        });

        // Add an event listener to the registration form's submit button
        const registerForm = document.getElementById("register-form");
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Handle registration logic here (you can add validation and registration code)
            // ...

            // Reload the page to allow the user to log in with the newly registered account
            window.location.reload();
        });
    });

//-------------------------------------------------------------------------------------------------
};