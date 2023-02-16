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

const editButton = document.querySelector(".profile__edit-button");
const closelEditingButton = document.querySelector("#closeEditingButton")
const newPostButton = document.querySelector('.profile__add-button');
const closePostButton = document.querySelector('#closePostButton');
const editPopup = document.querySelector("#editProfileForm");
const editForm = document.forms.editProfile;
const newPostPopup = document.querySelector('#newPostPopup');
const newPostForm = document.forms.newPost;
const cards = document.querySelector('.elements');
const userName = document.querySelector(".profile__name");
const nameInput = editProfile.elements.userNameInput;
const userJob = document.querySelector(".profile__description");
const jobInput = editProfile.elements.userJobInput;
const postTitleInput = newPost.elements.postTitleInput;
const postLinkInput = newPost.elements.postLinkInput;
const imagePopup = document.querySelector('#photo-popup');
const imagePopupContainer = document.querySelector('.photo-popup');
const imagePopupPhoto = document.querySelector('.photo-popup__image');
const imagePopupTitle = document.querySelector('.photo-popup__title');
const photoPopupClose = document.querySelector('#photo-popup__close')
const tempElement = cards.querySelector('#element').content;

initialCards.forEach((item) => {
  const postCard = createCard(item.name, item.link);
  cards.prepend(postCard);
  closePopup(newPostPopup);
})

closePostButton.addEventListener('click', () => {
  closePopup(newPostPopup);
})
closelEditingButton.addEventListener('click', () => {
  closePopup(editPopup);
});

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

photoPopupClose.addEventListener('click', () => {closePopup(imagePopup)})

cards.addEventListener('click', evt => { 
  if (evt.target.classList.contains('element__button-like')) { 
    evt.target.classList.toggle('element__button-like_active'); 
      return;
  }
  if (evt.target.classList.contains('element__button-delete')) { 
    evt.target.closest('.element').remove(); 
    return;
  } 
  if (evt.target.classList.contains('element__photo')) { 
    imagePopupPhoto.src = evt.target.src;
    imagePopupTitle.textContent = imagePopupPhoto.alt = evt.target.alt;
    openPopup(imagePopup);
  }
})

newPostPopup.addEventListener('click', (evt) => {
  if (!newPostForm.contains(evt.target)) {
    closePopup(newPostPopup)
  }
})

editPopup.addEventListener('click', (evt) => {
  if (!editForm.contains(evt.target)) {
    closePopup(editPopup)
  }
})

imagePopup.addEventListener('click', (evt) => {
  if (!imagePopupContainer.contains(evt.target)) {
    closePopup(imagePopup)
  }
})

window.addEventListener('keyup', (evt) => {
  if (evt.code == 'Escape') {
    if (editPopup.classList.contains('popup_opened')) {
      closePopup(editPopup)
    }
    if (newPostPopup.classList.contains('popup_opened')) {
      closePopup(newPostPopup)
    }
    if (imagePopup.classList.contains('popup_opened')) {
      closePopup(imagePopup)
    }
  }
})

function addPost (evt) {
  evt.preventDefault();
  const postCard = createCard(postTitleInput.value, postLinkInput.value);
  cards.prepend(postCard);
  newPost.reset();
  closePopup(newPostPopup);
}

function createCard (name, link) {
  const tempCard = tempElement.querySelector('.element').cloneNode(true);
  tempCard.querySelector('.element__photo').src = link;
  tempCard.querySelector('.element__title').textContent = tempCard.querySelector('.element__photo').alt = name;
  return tempCard
}

function handleEditFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup(editPopup);
}

function openPopup (item) {
  item.classList.add('popup_opened')
}

function closePopup (item) {
    item.classList.remove('popup_opened');
  }