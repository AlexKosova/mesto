export default class FormValidator {
  constructor (formName) {
    this.form = formName;
    this._formSelector = '.popup__container';
    this._inputSelector = '.popup__input';
    this._submitButtonSelector = '.popup__save-button';
    this._inactiveButtonClass = 'popup__save-button_disabled';
    this._errorClass = 'popup__input_type_error';
  }

  enableValidation() {
    this.form.addEventListener('submit', (event) => {
      this._disableSubmit(event)
    });
    this.form.addEventListener('input', () => {
      this._toggleButton();
    })
    this.form.addEventListener('reset', () => {
      setTimeout(() => { 
        this._toggleButton(), 0})
    }) 
  
    this._addInputListeners();
    this._toggleButton();
  }

  _toggleButton () {
    const submitButton = this.form.querySelector(this._submitButtonSelector);
    const isFormValid = this.form.checkValidity();
  
    submitButton.disabled = !isFormValid;
    submitButton.classList.toggle(this._inactiveButtonClass, !isFormValid);
  }

  _addInputListeners () {
    this.inputList = this.form.querySelectorAll(this._inputSelector)
    this.inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._handleFormInput(input)
      })
    })
  }

  _handleFormInput (input) {
    this.inputId = input.id;
    const errorElement = this.form.querySelector(`#${this.inputId}-error`)
  
    if (input.validity.valid) {
      input.classList.remove(this._errorClass);
      errorElement.textContent = ' ';
    } else {
      input.classList.add(this._errorClass);
      errorElement.textContent = input.validationMessage;
    }
  }

  _disableSubmit(event) {
    event.preventDefault();
}
}