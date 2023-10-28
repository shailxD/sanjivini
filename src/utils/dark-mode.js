const darkMode = () => {
  const darkModeToggleBtn = document.querySelector('#theme-toggle-dark');
  const lightModeToggleBtn = document.querySelector('#theme-toggle-light');
  const headerImg = document.querySelector('.header__img');
  const heroImg = document.querySelector('.hero__img');
  const heroImgMedical = document.querySelector('.hero_medicalcross');
  const consultationImg = document.querySelector('.consultation-img');
  const appointmentImg = document.querySelector('.appointmentIMG2');
  const theme = localStorage.getItem('theme');
  const originalSrc = headerImg.getAttribute('src');
  const herooriginalSrc = heroImg.getAttribute('src');
  const heroMedicaloriginalSrc = heroImgMedical.getAttribute('src');
  const consultationImgoriginalSrc = consultationImg.getAttribute('src');
  const appointmentImgoriginalSrc = appointmentImg.getAttribute('src');

  // Function to toggle the theme
  const toggleTheme = () => {
    if (document.body.classList.contains('light-mode')) {
      // Switch to dark mode
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
      document.body.style.backgroundImage = "var(--background-image-dark)";
      headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
      heroImg.setAttribute('src', heroImg.getAttribute('data-src-dark'));
      heroImgMedical.setAttribute('src', heroImgMedical.getAttribute('data-src-dark'));
      consultationImg.setAttribute('src', consultationImg.getAttribute('data-src-dark'));
      appointmentImg.setAttribute('src', appointmentImg.getAttribute('data-src-dark'));
      darkModeToggleBtn.style.display = 'block';
      lightModeToggleBtn.style.display = 'none';
    } else {
      // Switch to light mode
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
      document.body.style.backgroundImage = "var(--background-image-light)";
      headerImg.setAttribute('src', originalSrc);
      heroImg.setAttribute('src', herooriginalSrc);
      heroImgMedical.setAttribute('src', heroMedicaloriginalSrc);
      consultationImg.setAttribute('src', consultationImgoriginalSrc);
      appointmentImg.setAttribute('src', appointmentImgoriginalSrc);
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
    heroImg.setAttribute('src', herooriginalSrc);
    heroImgMedical.setAttribute('src', heroMedicaloriginalSrc);
    consultationImg.setAttribute('src', consultationImgoriginalSrc);
    appointmentImg.setAttribute('src', appointmentImgoriginalSrc);
    document.body.style.backgroundImage = "var(--background-image-light)";
  } else {
    darkModeToggleBtn.style.display = 'block';
    lightModeToggleBtn.style.display = 'none';
    // Set image sources for dark mode
    headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
    heroImg.setAttribute('src', heroImg.getAttribute('data-src-dark'));
    heroImgMedical.setAttribute('src', heroImgMedical.getAttribute('data-src-dark'));
    consultationImg.setAttribute('src', consultationImg.getAttribute('data-src-dark'));
    appointmentImg.setAttribute('src', appointmentImg.getAttribute('data-src-dark'));
    document.body.style.backgroundImage = "var(--background-image-dark)";
  }

  // Events
  darkModeToggleBtn.addEventListener('click', toggleTheme);
  lightModeToggleBtn.addEventListener('click', toggleTheme);
};

export default darkMode;

