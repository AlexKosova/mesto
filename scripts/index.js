//massive of cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// buttons
const editButton = document.querySelector(".profile__edit-button");
const closelEditingButton = document.querySelector("#closeEditingButton")
const newPostButton = document.querySelector('.profile__add-button');
const closePostButton = document.querySelector('#closePostButton');

// forms and onthers
const editForm = document.querySelector("#editProfileForm");
const formElement = document.querySelector("#editProfile");
const newPostForm = document.querySelector('#newPostForm');
const newPostElement = document.querySelector("#newPost");
const cards = document.querySelector('.elements');

// inputs and text-content
const userName = document.querySelector(".profile__name");
const nameInput = document.querySelector("#userName");
const userJob = document.querySelector(".profile__description");
const jobInput = document.querySelector("#userJob");
const postTitleInput = document.querySelector("#postTitleInput");
const postLinkInput = document.querySelector('#postLinkInput')

// function button-close
closePostButton.addEventListener('click', function() {
  newPostForm.classList.remove('popup_opened');
})
closelEditingButton.addEventListener('click', function() {
  editForm.classList.remove('popup_opened')
});

//function popup_opened
editButton.addEventListener('click', function() {
  editForm.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
});
newPostButton.addEventListener('click', function() {
  newPostForm.classList.add('popup_opened');
});

formElement.addEventListener('submit', handleFormSubmit);
newPostElement.addEventListener('submit', addPostButton);

function addPostButton (evt) {
  evt.preventDefault();
  cards.insertAdjacentHTML('afterbegin', 
    `<li class="element">
      <img class="element__photo" src="${postLinkInput.value}" alt="${postTitleInput.value}">
      <h2 class="element__title">${postTitleInput.value}</h2>
      <button class="element__button-like" aria-label="нравится" type="button"></button>
      <button class="element__button-delete"></button>
    </li>`);
    postLinkInput.value = '';
    postTitleInput.value = '';
    newPostForm.classList.remove('popup_opened');
    
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  editForm.classList.remove('popup_opened');
}

initialCards.forEach((item) => {
  cards.insertAdjacentHTML('afterbegin', 
    `<li class="element">
      <img class="element__photo" src="${item.link}" alt="${item.name}">
      <h2 class="element__title">${item.name}</h2>
      <button class="element__button-like" aria-label="нравится" type="button"></button>
      <button class="element__button-delete"></button>
    </li>`);
});

// LIKE
cards.addEventListener('click', (item) => {
  if (item.target.classList.contains('element__button-like')) {
    item.target.classList.toggle('element__button-like_active');
  }
})

// DELETE CARD
cards.addEventListener('click', (item) => {
  if (item.target.classList.contains('element__button-delete')) {
    item.target.parentElement.remove();
  }
})

//IMAGE-POPUP
const imagePopup = document.querySelector('.photo-popup');
const imagePopupPhoto = document.querySelector('.photo-popup__image');
const imagePopupTitle = document.querySelector('.photo-popup__title');
cards.addEventListener('click', (item) => {
  if (item.target.classList.contains('element__photo')) {
    imagePopup.classList.add('photo-popup_opened');
    imagePopupTitle.textContent = imagePopupPhoto.alt = item.target.alt;
    imagePopupPhoto.src = item.target.src;
  }
})

const photoPopupClose = document.querySelector('.photo-popup__close')
photoPopupClose.addEventListener('click', () => {imagePopup.classList.remove('photo-popup_opened')})