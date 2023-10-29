import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/login.css';
import '../styles/components/hero.css';
import '../styles/components/consultation.css';
import '../styles/components/appointment.css';
import '../styles/components/lifeline.css';
import '../styles/components/medicine.css';
import '../styles/components/footer.css';
import '../styles/utils.css';

import darkMode from './utils/dark-mode'; 
import loginregister from './utils/login_register';
import { initializeBackToTopButton } from './utils/backtoTop';

darkMode(); // theme toggling function
loginregister(); // login/register toggling function
initializeBackToTopButton(); // Back-to-Top function

