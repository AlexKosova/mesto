export default class Card {
  constructor (name, link, tempSelector, handleOpenPopup) {
    this._name = name;
    this._link = link;
    this._tempSelector = tempSelector;
    this._tempCard = this.createCard();
    this._handleOpenPopup = handleOpenPopup;
  }

  createCard () {
    this._tempCard = this._getTemplate();
    this._tempImageElem = this._tempCard.querySelector('.element__photo'); 
    this._tempImageElem.src = this._link;
    this._tempCard.querySelector('.element__title').textContent = this._tempImageElem.alt = this._name;
    this._setEventListeners();
      return this._tempCard
  }

  _getTemplate () {
    const tempElement = document.querySelector(this._tempSelector).content;
    const tempCard = tempElement.querySelector('.element').cloneNode(true);
    return tempCard;
  }

  _setEventListeners () {
    this._buttonLike = this._tempCard.querySelector('.element__button-like');
    this._buttonLike.addEventListener('click', () => {
      this._like()
    });
    this.buttonDelete = this._tempCard.querySelector('.element__button-delete')

    this.buttonDelete.addEventListener('click', () => {
      this._remove()
    })

    this._tempImageElem.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    })
  }

  _like () {
    this._buttonLike.classList.toggle('element__button-like_active');
  }

  _remove () {
    this.buttonDelete.closest('.element').remove();
  }
}