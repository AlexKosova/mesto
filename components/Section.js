export default class Section  {
constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems () { 
    this._items.forEach(item => { 
       this._container.prepend(this._renderer(item.title, item.link))
  }); 
} 

  addItem (title, link) {
    this._container.prepend(this._renderer(title, link))
  }
}