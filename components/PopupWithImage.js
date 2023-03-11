import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super (popupSelector)
    this._imagePopupPhoto = document.querySelector('.photo-popup__image');
    this._imagePopupTitle = document.querySelector('.photo-popup__title');
  }

  open (name, link) {
    this._imagePopupPhoto.src = link;
    this._imagePopupTitle.textContent = this._imagePopupPhoto.alt = name;
    super.open();
  }
}