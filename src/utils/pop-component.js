const popup_components = () => {

    //consultation
    const consultation_wrapper = document.querySelector('.consultation-form-wrapper');
    const consultation_btnPopup = document.querySelector('.consultation-form');
    const consultation_iconClose = document.querySelector('.consultation-icon-close');

    consultation_btnPopup.addEventListener('click', ()=>{
        consultation_wrapper.classList.add('consultation-active-popup');
    });

    consultation_iconClose.addEventListener('click', ()=>{
        consultation_wrapper.classList.remove('consultation-active-popup');
    });

    //appointment
    const appointment_wrapper = document.querySelector('.appointment-form-wrapper');
    const appointment_btnPopup = document.querySelector('.appointment-form');
    const appointment_iconClose = document.querySelector('.appointment-icon-close');

    appointment_btnPopup.addEventListener('click', ()=>{
        appointment_wrapper.classList.add('appointment-active-popup');
    });

    appointment_iconClose.addEventListener('click', ()=>{
        appointment_wrapper.classList.remove('appointment-active-popup');
    });
}

export default popup_components;