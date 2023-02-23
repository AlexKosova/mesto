export default class Card {
  constructor (name, link) {
    this._name = name;
    this._link = link;
    this._tempElement = this.createCard();
    this.imagePopup = document.querySelector('#photo-popup');
  }

  createCard () {
    this._tempCard = this._getTemplate();
    this._tempCard.querySelector('.element__photo').src = this._link;
    this._tempCard.querySelector('.element__title').textContent = this._tempCard.querySelector('.element__photo').alt = this._name;
    this._setEventListeners();
      return this._tempCard
  }

  _getTemplate () {
    const tempElement = document.querySelector('#element').content;
    const tempCard = tempElement.querySelector('.element').cloneNode(true);
    return tempCard;
  }

  _setEventListeners () {
    this._tempCard.querySelector('.element__button-like').addEventListener('click', () => {
      this._like()
    });

    this._tempCard.querySelector('.element__button-delete').addEventListener('click', () => {
      this._remove()
    })

    this._tempCard.querySelector('.element__photo').addEventListener('click', () => {
      this._photoPopup()
    })
  }

  _like () {
    this._tempCard.querySelector('.element__button-like').classList.toggle('element__button-like_active');
  }

  _remove () {
    this._tempCard.querySelector('.element__button-delete').closest('.element').remove();
  }

  _photoPopup () {
    document.querySelector('.photo-popup__image').src = this._link;
    document.querySelector('.photo-popup__title').textContent = document.querySelector('.photo-popup__image').alt = this._name;
    openPopup(document.querySelector('#photo-popup'));
  }
}