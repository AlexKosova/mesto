import { Popup } from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector, {callbackSubmit} ) {
    super (popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__confirm-button')
    this._callbackSubmit = callbackSubmit;
  }

  setEventListeners () {
    super.setEventListeners()
    this._confirmButton.addEventListener('click', () => {
      this._callbackSubmit(this._card, this._cardId)
    })
  }

  open (card, element) {
    this._cardId = element._id;
    this._card = card;
    super.open()
  }
}