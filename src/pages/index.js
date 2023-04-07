import "./index.css";
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
  editPhotoButton,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

let userId = "";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    "content-type": "application/json",
    authorization: "89bed7b0-4fbb-4075-8e62-f50b9f0aeeaf",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, items]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    initialCardsSection.renderItems(items);
  })
  .catch((err) => {
    console.log(err);
  });

const initialCardsSection = new Section({ renderer: renderCard }, cards);

const handleCardClick = new PopupWithImage(imagePopup);
handleCardClick.setEventListeners();

const postPopup = new PopupWithForm(newPostPopup, addPost);
postPopup.setEventListeners();

const editOpenPopup = new PopupWithForm(editPopup, handleEditFormSubmit);
editOpenPopup.setEventListeners();

const editPhotoPopup = new PopupWithForm(profilePhotoPopup, changePhoto);
editPhotoPopup.setEventListeners();

const confirmDeletionPopup = new PopupWithConfirmation(confirmPopup, {
  callbackSubmit: (card, cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        card.remove();
        confirmDeletionPopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
confirmDeletionPopup.setEventListeners();

const newPostValidator = new FormValidator(config, newPostForm);
newPostValidator.enableValidation();

const editProfileValidator = new FormValidator(config, editForm);
editProfileValidator.enableValidation();

const editPhotoValidator = new FormValidator(config, editPhotoForm);
editPhotoValidator.enableValidation();

function renderCard(element) {
  const postCard = new Card(element, "#element", userId, openImagePopup, {
    checkLike: () => {
      if (postCard.isLiked(element.likes)) {
        api
          .deleteLike(element._id)
          .then((res) => {
            postCard.like(res.likes);
            element.likes = res.likes;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .setLike(element._id)
          .then((res) => {
            postCard.like(res.likes);
            element.likes = res.likes;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cardDelition: (card, element) => {
      confirmDeletionPopup.open(card, element);
    },
  });
  initialCardsSection.addItem(postCard.createCard());
  if (postCard.isLiked(element.likes)) {
    postCard.like(element.likes);
  }
}

function addPost(inputList) {
  postPopup.loading("создаём...");
  api
    .addCard(inputList)
    .then((res) => {
      renderCard(res);
      postPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      postPopup.loading("создать");
    })
}

function openImagePopup(title, link) {
  handleCardClick.open(title, link);
}

const userInfo = new UserInfo({
  profileName: ".profile__name",
  userJob: ".profile__description",
  userPhoto: ".profile__photo",
});

function handleEditFormSubmit(inputList) {
  editOpenPopup.loading("сохраняем...");
  api
    .editprofile(inputList)
    .then((res) => {
      userInfo.setUserInfo(res);
      editOpenPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editOpenPopup.loading("сохранить");
    })
}

function changePhoto(inputList) {
  editPhotoPopup.loading("сохраняем...");
  api
    .editPhoto(inputList)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      editPhotoPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editPhotoPopup.loading("сохранить");
    })
}

editButton.addEventListener("click", () => {
  editOpenPopup.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.info;
});

newPostButton.addEventListener("click", () => {
  postPopup.open();
});

editPhotoButton.addEventListener("click", () => {
  editPhotoPopup.open();
});
