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
const editForm = document.querySelector("#editProfile");
const newPostPopup = document.querySelector('#newPostPopup');
const newPostForm = document.querySelector("#newPost");
const cards = document.querySelector('.elements');
const userName = document.querySelector(".profile__name");
const nameInput = document.querySelector("#userName");
const userJob = document.querySelector(".profile__description");
const jobInput = document.querySelector("#userJob");
const postTitleInput = document.querySelector("#postTitleInput");
const postLinkInput = document.querySelector('#postLinkInput')
const imagePopup = document.querySelector('#photo-popup');
const imagePopupPhoto = document.querySelector('.photo-popup__image');
const imagePopupTitle = document.querySelector('.photo-popup__title');
const photoPopupClose = document.querySelector('#photo-popup__close')
const tempElement = cards.querySelector('#element').content;

initialCards.forEach((item) => {
  const tempCard = tempElement.querySelector('.element').cloneNode(true);
  tempCard.querySelector('.element__photo').src = item.link;
  tempCard.querySelector('.element__title').textContent = tempCard.querySelector('.element__photo').alt= item.name;
  cards.prepend(tempCard);
});

closePostButton.addEventListener('click', function() {
  closePopup(newPostPopup);
})
closelEditingButton.addEventListener('click', function() {
  closePopup(editPopup);
});

editButton.addEventListener('click', function() {
  openPopup(editPopup);
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
});
newPostButton.addEventListener('click', function() {
  openPopup(newPostPopup);
});

editForm.addEventListener('submit', handleEditForm);
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

function addPost (evt) {
  evt.preventDefault();
  const tempCard = tempElement.querySelector('.element').cloneNode(true);
  tempCard.querySelector('.element__photo').src = postLinkInput.value;
  tempCard.querySelector('.element__title').textContent = tempCard.querySelector('.element__photo').alt = postTitleInput.value;
  cards.prepend(tempCard);
  postLinkInput.value = '';
  postTitleInput.value = '';
  closePopup(newPostPopup);
}

function handleEditForm (evt) {
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