export class Popup {
  constructor (popupSelector) {
    this._popup = popupSelector
    this._opened = 'popup_opened'
  }

  open () {
    this._popup.classList.add(this._opened)
    document.addEventListener('keydown', this._closeByEscape)
  }

  close () {
    this._popup.classList.remove(this._opened);
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _closeByEscape (evt) {
    if (evt.key === 'Escape') { 
      const openedPopup = document.querySelector('.popup_opened');
      const closedPopup = new Popup (openedPopup)
      closedPopup.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(this._opened) || evt.target.classList.contains('popup__cancel-button')) {
        this.close()
      }
    })
  }
}