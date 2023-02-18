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
const newPostButton = document.querySelector('.profile__add-button');
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
const tempElement = cards.querySelector('#element').content;

initialCards.forEach((item) => {
  const postCard = createCard(item.name, item.link);
  cards.prepend(postCard);
  closePopup(newPostPopup);
})

const popups = document.querySelectorAll('.popup')

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

function closeByEscape(evt) {
  if (evt.code === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    closePopup(openedPopup)
  }
}

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

function openPopup (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }