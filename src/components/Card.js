export default class Card {
  constructor (element, tempSelector, userId, handleCardClick, {checkLike, cardDelition}) {
    this._title = element.name;
    this._link = element.link;
    this._tempSelector = tempSelector;
    this._tempCard = this.createCard();
    this._handleCardClick = handleCardClick;
    this._likes = element.likes.length;
    this._card = element;
    this._cardId = element._id;
    this._id = userId;
    this._checkLike = checkLike;
    this.ownerId = element.owner._id;
    this._deleteCard = cardDelition;
  }

  createCard () {
    this._tempCard = this._getTemplate();
    this._tempImageElem = this._tempCard.querySelector('.element__photo'); 
    this._tempImageElem.src = this._link;
    this._tempCard.querySelector('.element__title').textContent = this._tempImageElem.alt = this._title;
    this._setEventListeners();
    this._isOwner();
      return this._tempCard
  }

  _isOwner () {
    if (this.ownerId !== this._id) {
      this._buttonDelete.remove()
    }
  }

  _getTemplate () {
    const tempElement = document.querySelector(this._tempSelector).content;
    const tempCard = tempElement.querySelector('.element').cloneNode(true);
    return tempCard;
  }

  _setEventListeners () {
    this._buttonLike = this._tempCard.querySelector('.element__button-like');
    this._buttonLike.addEventListener('click', () => {
      this._checkLike();
    });

    this._buttonDelete = this._tempCard.querySelector('.element__button-delete')
    this._buttonDelete.addEventListener('click', () => {
      this._deleteCard(this._tempCard, this._card)
    })

    this._tempImageElem.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    })

    this._likeCounter =  this._tempCard.querySelector('.element__likeQuantity');
    this._likeCounter.textContent = this._likes;
  }

  like (data) {
    this._likes = data.length;
    this._buttonLike.classList.toggle('element__button-like_active');
    this._likeCounter.textContent = this._likes;
  }

  isLiked (likes) {
    if (likes.find(user => user._id === this._id)) {
      return true;
    }
  }

  _delete () {
    this._tempCard.remove()
  }
}