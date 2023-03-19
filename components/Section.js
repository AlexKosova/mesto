export default class Section  {
constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems () { 
    const cardList = []
    this._items.forEach(item => { 
      cardList.push(this._renderer(item.title, item.link))
  }); 
    return cardList
} 

  addItem (element) {
      this._container.prepend(element)
  }
}