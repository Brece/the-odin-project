document.addEventListener('DOMContentLoaded', () => {
    emailVal();
    countryVal();
    zipVal();
    passwordVal();
    passwordConfirmation();
    submitEvent();
});

function submitEvent() {
    const form = document.querySelector('.c-form__content');
    form.addEventListener('submit', (e) => {

        if (!emailVal() || !countryVal() || zipVal() || passwordVal() || passwordConfirmation()) {
            e.preventDefault();
        }
    });
}

function emailVal() {
    const email = document.querySelector('#email');
    const parent = email.parentElement;

    return checkValidity(email, parent, 'Email');
}

function countryVal() {
    const country = document.querySelector('#country');
    const parent = country.parentElement;

    return checkValidity(country, parent, 'Country');
}

function zipVal() {
    const zip = document.querySelector('#zip');
    const parent = zip.parentElement;

    return checkValidity(zip, parent, 'ZIP-Code');
}

function passwordVal() {
    const password = document.querySelector('#password');
    const parent = password.parentElement;

    return checkValidity(password, parent, 'Password');
}

function passwordConfirmation() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password2');
    const parent = passwordConfirm.parentElement;

    passwordConfirm.addEventListener('input', () => {
        if(password.value !== passwordConfirm.value) {
            parent.querySelector('.c-form__content__input__field__error').textContent = `Your password doesn't match.`;
            field.classList.add('isInvalid');
            field.classList.remove('isValid');
            return false;
        }

        parent.querySelector('.c-form__content__input__field__error').textContent = '';
        field.classList.add('isValid');
        field.classList.remove('isInvalid');
        return true
    });
    
}

function checkValidity(field, parent, type) {
    field.addEventListener('input', () => {
        console.log(field.validity.valueMissing);
        if (field.validity.valueMissing) {
            parent.querySelector('.c-form__content__input__field__error').textContent = `Please type in your ${type}.`;
            field.classList.add('isInvalid');
            field.classList.remove('isValid');
            return false;
        }

        parent.querySelector('.c-form__content__input__field__error').textContent = '';
        field.classList.add('isValid');
        field.classList.remove('isInvalid');
        return true;
    });
}