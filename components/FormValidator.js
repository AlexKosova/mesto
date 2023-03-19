export default class FormValidator {
  constructor (config, form) {
    this._form = form;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._errorClass = config.errorClass;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButton();
  }

  _toggleButton () {
    const isFormValid = this._form.checkValidity();
  
    this._submitButton.disabled = !isFormValid;
    this._submitButton.classList.toggle(this._inactiveButtonClass, !isFormValid);
  }

  _setEventListeners () {
    this._form.addEventListener('reset', () => {
      setTimeout(() => { 
        this._toggleButton(), 0})
    }) 

    const _inputList = this._form.querySelectorAll(this._inputSelector);
    _inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._handleFormInput(input);
        this._toggleButton();
      })
    })
  }

  _handleFormInput (input) {
    this.inputId = input.id;
    const errorElement = this._form.querySelector(`#${this.inputId}-error`)
  
    if (input.validity.valid) {
      input.classList.remove(this._errorClass);
      errorElement.textContent = ' ';
    } else {
      input.classList.add(this._errorClass);
      errorElement.textContent = input.validationMessage;
    }
  }
}