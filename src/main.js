import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/preloader.css';
import '../styles/components/header.css';
import '../styles/components/login_register.css';
import '../styles/components/hero.css';
import '../styles/components/consultation.css';
import '../styles/components/appointment.css';
import '../styles/components/lifeline.css';
import '../styles/components/medicine.css';
import '../styles/components/footer.css';
import '../styles/utils.css';

import { customCursor } from './utils/custom-cursor';
import darkMode from './utils/dark-mode'; 
import { AllLoginJS } from './login';
import { initializeBackToTopButton } from './utils/backtoTop';
import popup_components from './utils/pop-component';

customCursor();
darkMode(); // theme toggling function
AllLoginJS();
initializeBackToTopButton(); // Back-to-Top function
popup_components(); //pop-up function

// preloader logic
import { handlePreloader } from './utils/preloader.js';

document.addEventListener('DOMContentLoaded', () => {
    handlePreloader();
});

//Sign-out
const signoutButton = document.getElementById("hide-me2");
signoutButton.addEventListener("click", function() {
    location.reload(); 
});