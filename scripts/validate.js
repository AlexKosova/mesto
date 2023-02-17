function disableSubmit(event) {
    event.preventDefault();
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
  form.addEventListener('input', () => {
    toggleButton(form, config);
  })

  form.addEventListener('reset', () => {
    setTimeout(() => { toggleButton(form, config), 0})
  }) 

  addInputListeners(form, config);
  toggleButton(form, config);
  })
}

function handleFormInput (event, config) {
  const input = event.target; 
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`)

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = ' ';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

function addInputListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach( (item) => {
    item.addEventListener('input', (event) => {handleFormInput (event, config)})
  })
}

enableValidation ({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  errorClass: 'popup__input_type_error'
}); 

function toggleButton(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();

  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(config.inactiveButtonClass, !isFormValid);
}