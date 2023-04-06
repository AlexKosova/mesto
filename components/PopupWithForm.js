import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, callbackSubmit) {
    super (popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector('form');
    this._inputValues = this._popup.querySelectorAll('.popup__input');
    this._button = this._popup.querySelector('.popup__save-button');
  }

  _getInputValues () {
    const inputList = {};
    this._inputValues.forEach(item => {
      inputList[item.name] = item.value;
    })
    return inputList;
  }

  setEventListeners (startLoadText, finishLoadText) {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      this._button.textContent = startLoadText
      evt.preventDefault();
      this._callbackSubmit(this._getInputValues())
      this._button.textContent = finishLoadText
      this.close();
    })
    }

  close () {
    super.close();
    this._form.reset()
  }
}