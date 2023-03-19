import '../pages/index.css'
import {editButton} from "../utils/constants.js";
import {newPostButton} from "../utils/constants.js";
import {editPopup} from "../utils/constants.js";
import {editForm} from "../utils/constants.js";
import {newPostPopup} from "../utils/constants.js";
import {newPostForm} from "../utils/constants.js";
import {cards} from "../utils/constants.js";
import {userName} from "../utils/constants.js";
import {nameInput} from "../utils/constants.js";
import {userJob} from "../utils/constants.js";
import {jobInput} from "../utils/constants.js";
import {imagePopup} from "../utils/constants.js";
import {config} from "../utils/constants.js";
import {initialCards} from "../utils/initialCards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const initialCardsSection = new Section ({items: initialCards, renderer: renderCard}, cards)
initialCardsSection.renderItems();


const handleCardClick = new PopupWithImage (imagePopup)
handleCardClick.setEventListeners();

const postPopup = new PopupWithForm(newPostPopup, addPost);
postPopup.setEventListeners();

const editOpenPopup = new PopupWithForm(editPopup, handleEditFormSubmit);
editOpenPopup.setEventListeners();

const newPostValidator = new FormValidator (config, newPostForm);
newPostValidator.enableValidation();

const editProfileValidator = new FormValidator (config, editForm)
editProfileValidator.enableValidation();

function renderCard (title, link) {
  const postCard = new Card (title, link, '#element', openImagePopup);
  initialCardsSection.addItem(postCard.createCard());
}

function addPost (inputList) {
  initialCardsSection.addItem(renderCard(inputList.postTitleInput, inputList.postLinkInput));
}

function openImagePopup (title, link) {
  handleCardClick.open(title, link)
}

function handleEditFormSubmit (inputList) {
  const userInfo = new UserInfo ({profileName: ".profile__name", userJob: ".profile__description"});
  userInfo.setUserInfo(inputList.userName, inputList.userJobInput);
}

editButton.addEventListener('click', () => {
  editOpenPopup.open()
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
});

newPostButton.addEventListener('click', () => {
  postPopup.open()
});





