import { Popup } from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector, {callbackSubmit} ) {
    super (popupSelector);
    this._confirmButton = this._popup.querySelector('.popup__confirm-button')
    this._callbackSubmit = callbackSubmit;
  }

  confirmAction () {
    this._confirmButton.addEventListener('click', () => {
      this._callbackSubmit(this._card, this._cardId)
      this.close()
    })
  }

  open (card, element) {
    this._cardId = element._id;
    this._card = card;
    super.open()
  }
}