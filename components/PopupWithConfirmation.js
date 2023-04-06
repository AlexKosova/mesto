import { Popup } from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector) {
    super (popupSelector);
    this._button = this._popup.querySelector('.popup__confirm-button')
  }

  confirmAction (card, {callbackSubmit}) {
    this.open();
    this.setEventListeners();
    this._button.addEventListener('click', () => {
      callbackSubmit(card._id)
      this.close()
    })
  }
}