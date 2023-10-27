const loginregister = () => {
    const wrapper = document.querySelector('.login-wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.header__getstart');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', ()=>{
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', ()=>{
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', ()=>{
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup');
    });
}

export default loginregister;