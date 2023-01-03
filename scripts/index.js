const openPopup = document.querySelector(".profile__edit-button");
const editButton = document.querySelector(".popup");
const cancelButton = document.querySelector(".popup__cancel-button")
const userName = document.querySelector(".profile__name");
const nameInput = document.querySelector(".popup__name");
const userJob = document.querySelector(".profile__description");
const jobInput = document.querySelector(".popup__description");
const formElement = document.querySelector(".popup__container")

function editPopup() {
  editButton.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
};

function closePopup() {
  editButton.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup()
}

openPopup.addEventListener('click', editPopup);
cancelButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);


