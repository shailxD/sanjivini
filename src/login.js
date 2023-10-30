document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate a successful login
    if (username === "Hello" && password === "1234") {
        // Redirect to your main website
        window.location.href = "main.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

//-------------------------------------------------------------------------------------------------

import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/login_register.css';
import '../styles/utils.css';

//-------------------------------------------------------------------------------------------------
//darkMode
const darkModeToggleBtn = document.querySelector('.theme-toggle-dark');
const lightModeToggleBtn = document.querySelector('.theme-toggle-light');
const headerImg = document.querySelector('.header__img');
const login_Img = document.querySelector('.login-image-IMG');
const theme = localStorage.getItem('theme');
const originalSrc = headerImg.getAttribute('src');
const login_ImgoriginalSrc = login_Img.getAttribute('src');

// Function to toggle the theme
const toggleTheme = () => {
    if (document.body.classList.contains('light-mode')) {
    // Switch to dark mode
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark-mode');
    document.body.style.backgroundImage = "var(--background-image-dark)";
    headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
    login_Img.setAttribute('src', login_Img.getAttribute('data-src-dark'));
    darkModeToggleBtn.style.display = 'block';
    lightModeToggleBtn.style.display = 'none';
    } else {
    // Switch to light mode
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    document.body.style.backgroundImage = "var(--background-image-light)";
    headerImg.setAttribute('src', originalSrc);
    login_Img.setAttribute('src', login_ImgoriginalSrc);
    darkModeToggleBtn.style.display = 'none';
    lightModeToggleBtn.style.display = 'block';
    }
};

// Check the saved theme and set the initial button display
if (theme === 'light-mode') {
    document.body.classList.add('light-mode');
    lightModeToggleBtn.style.display = 'block';
    darkModeToggleBtn.style.display = 'none';
    // Set image sources for light mode
    headerImg.setAttribute('src', originalSrc);
    login_Img.setAttribute('src', login_ImgoriginalSrc);
    document.body.style.backgroundImage = "var(--background-image-light)";
} else {
    darkModeToggleBtn.style.display = 'block';
    lightModeToggleBtn.style.display = 'none';
    // Set image sources for dark mode
    headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
    login_Img.setAttribute('src', login_Img.getAttribute('data-src-dark'));
    document.body.style.backgroundImage = "var(--background-image-dark)";
}

// Events
darkModeToggleBtn.addEventListener('click', toggleTheme);
lightModeToggleBtn.addEventListener('click', toggleTheme);

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