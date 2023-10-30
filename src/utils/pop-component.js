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

    //lifeline
    const lifeline_wrapper = document.querySelector('.lifeline-form-wrapper');
    const lifeline_btnPopup = document.querySelector('.lifeline-form');
    const lifeline_iconClose = document.querySelector('.lifeline-icon-close');

    lifeline_btnPopup.addEventListener('click', ()=>{
        lifeline_wrapper.classList.add('lifeline-active-popup');
    });

    lifeline_iconClose.addEventListener('click', ()=>{
        lifeline_wrapper.classList.remove('lifeline-active-popup');
    });

    //medicine
    const medicine_wrapper = document.querySelector('.medicine-form-wrapper');
    const medicine_btnPopup = document.querySelector('.medicine-form');
    const medicine_iconClose = document.querySelector('.medicine-icon-close');

    medicine_btnPopup.addEventListener('click', ()=>{
        medicine_wrapper.classList.add('medicine-active-popup');
    });

    medicine_iconClose.addEventListener('click', ()=>{
        medicine_wrapper.classList.remove('medicine-active-popup');
    });
}

export default popup_components;