import '../pages/index.css'
import {
  confirmPopup, 
  editButton, 
  newPostButton, 
  editPopup, 
  editForm, 
  newPostPopup,
  newPostForm,
  cards,
  nameInput,
  jobInput,
  imagePopup,
  config,
  editPhotoForm,
  profilePhotoPopup,
  editPhotoButton} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

let userId = '';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    authorization: '89bed7b0-4fbb-4075-8e62-f50b9f0aeeaf'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, items]) => {
  userId = userData._id;  
  userInfo.setUserInfo(userData);
  initialCardsSection.renderItems(items);
  })
  .catch((err) => {
    console.log(err);
  }
)

const initialCardsSection = new Section ({renderer: renderCard}, cards)

const handleCardClick = new PopupWithImage (imagePopup)
handleCardClick.setEventListeners();

const postPopup = new PopupWithForm(newPostPopup, addPost);
postPopup.setEventListeners('создаём...', 'создать');

const editOpenPopup = new PopupWithForm(editPopup, handleEditFormSubmit);
editOpenPopup.setEventListeners('сохраняем...', 'сохранить');

const editPhotoPopup = new PopupWithForm (profilePhotoPopup, changePhoto);
editPhotoPopup.setEventListeners('сохраняем...', 'сохранить');

const confirmDeletionPopup = new PopupWithConfirmation (confirmPopup)

const newPostValidator = new FormValidator (config, newPostForm);
newPostValidator.enableValidation();

const editProfileValidator = new FormValidator (config, editForm)
editProfileValidator.enableValidation();

const editPhotoValidator = new FormValidator (config, editPhotoForm)
editPhotoValidator.enableValidation();

function renderCard (element) {
  const postCard = new Card (element, '#element', userId, openImagePopup,{checkLike: () => {
    if (postCard.isLiked(element.likes)) {
      api.deleteLike(element._id)
      .then(res => {
          postCard.like(res.likes);
          element.likes = res.likes
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      api.setLike(element._id)
      .then(res => {
        postCard.like(res.likes)
        element.likes = res.likes;
      })
      .catch((err) => {
        console.log(err);
      })
  }},
  cardDelition: () => {
    confirmDeletionPopup.confirmAction(element, {callbackSubmit: () => {
      api.deleteCard(element._id)
        .then(postCard._remove())
        .catch((err) => {
          console.log(err);
        })
      }})
    }
  });
  initialCardsSection.addItem(postCard.createCard());
  if (postCard.isLiked(element.likes)) {
    postCard.like(element.likes)
  }
}

function addPost (inputList) {
  api.addCard(inputList)
  .then(res => renderCard(res))
  .catch((err) => {
    console.log(err);
  })
}

function openImagePopup (title, link) {
  handleCardClick.open(title, link)
}

const userInfo = new UserInfo ({profileName: ".profile__name", userJob: ".profile__description", userPhoto: ".profile__photo"});

function handleEditFormSubmit (inputList) {
  api.editprofile(inputList)
    .then(res => 
      userInfo.setUserInfo(res))
    .catch((err) => {
      console.log(err);
    })
}

function changePhoto (inputList) {
  api.editPhoto(inputList)
    .then(res => {
      userInfo.setUserAvatar(res)
    })
    .catch((err) => {
      console.log(err);
    })
}

editButton.addEventListener('click', () => {
  editOpenPopup.open()
  const user = userInfo.getUserInfo()
  nameInput.value = user.name;
  jobInput.value = user.info;
});

newPostButton.addEventListener('click', () => {
  postPopup.open()
});

editPhotoButton.addEventListener('click', () => {
  editPhotoPopup.open()
})



