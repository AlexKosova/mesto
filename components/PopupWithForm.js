import { Popup } from "./Popup.js";
import { nameInput } from "./constants.js";
import { jobInput } from "./constants.js";
import { postTitleInput } from "./constants.js";
import { postLinkInput } from "./constants.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, callbackSubmit) {
    super (popupSelector);
    this._callbackSubmit = callbackSubmit;
  }

  _getInputValues () {
    const inputValuesObj = {
      name: nameInput.value,
      info: jobInput.value,
      title: postTitleInput.value,
      link: postLinkInput.value
    }
    return inputValuesObj;
  }

  setEventListeners () {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._callbackSubmit)
  }

  close () {
    super.close();
    this._popup.querySelector('form').reset()
  }
}