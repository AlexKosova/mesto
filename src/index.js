import '../pages/index.css'
import {editButton} from "../components/constants.js";
import {newPostButton} from "../components/constants.js";
import {editPopup} from "../components/constants.js";
import {editForm} from "../components/constants.js";
import {newPostPopup} from "../components/constants.js";
import {newPostForm} from "../components/constants.js";
import {cards} from "../components/constants.js";
import {userName} from "../components/constants.js";
import {nameInput} from "../components/constants.js";
import {userJob} from "../components/constants.js";
import {jobInput} from "../components/constants.js";
import {imagePopup} from "../components/constants.js";
import {config} from "../components/constants.js";
import {initialCards} from "../components/initialCards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

function renderCard (title, link) {
  const postCard = new Card (title, link, '#element', handleCardClick);
  return postCard.createCard();
}

function addPost (evt) {
  evt.preventDefault();
  const inputValuesObj = postPopup._getInputValues();
  const cardSection = new Section ({items: inputValuesObj, renderer: renderCard}, cards)
  cardSection.renderItem();
  postPopup.close();
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  const inputValuesObj = postPopup._getInputValues();
  const updateUserInfo = new UserInfo ({name: inputValuesObj.name, info: inputValuesObj.info});
  updateUserInfo.setUserInfo();
  editOpenPopup.close();
}

editButton.addEventListener('click', () => {
  editOpenPopup.open()
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
});

newPostButton.addEventListener('click', () => {
  postPopup.open()
});

const postPopup = new PopupWithForm(newPostPopup, addPost);
postPopup.setEventListeners();

const editOpenPopup = new PopupWithForm(editPopup, handleEditFormSubmit);
editOpenPopup.setEventListeners();

const handleCardClick = new PopupWithImage (imagePopup)
handleCardClick.setEventListeners();

const newPostValidator = new FormValidator (config, newPostForm);
newPostValidator.enableValidation();

const editProfileValidator = new FormValidator (config, editForm)
editProfileValidator.enableValidation();

const initialCardsSection = new Section ({items: initialCards, renderer: renderCard}, cards)
initialCardsSection.renderItem()