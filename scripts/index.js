const editButton = document.querySelector(".profile__edit-button");
const newPostButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector("#editProfileForm");
const editForm = document.forms.editProfile;
const newPostPopup = document.querySelector('#newPostPopup');
const newPostForm = document.forms.newPost;
const cards = document.querySelector('.elements');
const userName = document.querySelector(".profile__name");
const nameInput = editForm.elements.userNameInput;
const userJob = document.querySelector(".profile__description");
const jobInput = editForm.elements.userJobInput;
const postTitleInput = newPostForm.elements.postTitleInput;
const postLinkInput = newPostForm.elements.postLinkInput;
const imagePopup = document.querySelector('#photo-popup');
const imagePopupPhoto = document.querySelector('.photo-popup__image');
const imagePopupTitle = document.querySelector('.photo-popup__title');
const popups = document.querySelectorAll('.popup')

import {initialCards} from "./initialCards.js";
import Card from "./card.js";
import FormValidator from "./formValidator.js";

function closeByEscape(evt) {
  if (evt.code === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    closePopup(openedPopup)
  }
}

function addPost (evt) {
  evt.preventDefault();
  const postCard = new Card (postTitleInput.value, postLinkInput.value);
  cards.prepend(postCard.createCard());
  newPostForm.reset();
  closePopup(newPostPopup);
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editPopup);
}

window.openPopup = function (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__cancel-button')) {
      closePopup(popup)
    }
  })
})

editButton.addEventListener('click', () => {
  openPopup(editPopup);
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
});
newPostButton.addEventListener('click', () => {
  openPopup(newPostPopup);
});

editForm.addEventListener('submit', handleEditFormSubmit);
newPostForm.addEventListener('submit', addPost);

initialCards.forEach((item) => {
  const postCard = new Card (item.name, item.link);
  cards.prepend(postCard.createCard());
  closePopup(newPostPopup);
})

const newPost = new FormValidator (newPostForm);
newPost.enableValidation();

const editProfile = new FormValidator (editForm)
editProfile.enableValidation();