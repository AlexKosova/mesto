export default class Section  {
constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItem () {
    if (this._items.length > 1) 
     {
      this._items.forEach(item => {
      this.card = this._renderer(item.title, item.link)
      this.addItem(this.card)
    });
    }
    else {
      this.card = this._renderer(this._items.title, this._items.link)
      this.addItem(this.card)
    }
  }

  addItem (element) {
    this._container.prepend(element)
  }
}