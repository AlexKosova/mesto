import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super (popupSelector)
    this._imagePopupPhoto = this._popup.querySelector('.photo-popup__image');
    this._imagePopupTitle = this._popup.querySelector('.photo-popup__title');
  }

  open (title, link) {
    this._imagePopupPhoto.src = link;
    this._imagePopupTitle.textContent = this._imagePopupPhoto.alt = title;
    super.open();
  }
}