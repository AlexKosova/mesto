export class Popup {
  constructor (popupElement) {
    this._popup = popupElement
    this._opened = 'popup_opened'
  }

  open () {
    this._popup.classList.add(this._opened)
    document.addEventListener('keydown', (evt) => {this._closeByEscape (evt)} )
  }

  close () {
    this._popup.classList.remove(this._opened);
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _closeByEscape (evt) {
    if (evt.key === 'Escape') { 
    this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains(this._opened) || evt.target.classList.contains('popup__cancel-button')
        ) {
        this.close()
      }
    })
  }
}