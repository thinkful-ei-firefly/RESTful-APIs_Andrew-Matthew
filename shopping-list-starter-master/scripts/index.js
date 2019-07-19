"use strict";
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = {
  items: [],
  hideCheckedItems: false,
  searchTerm: "",
  addItem(item) {
    this.items.push(item);
  }
};

function main() {
  api
    .getItems()
    .then(res => res.json())
    .then(items => {
      items.forEach(item => store.addItem(item));
      shoppingList.render();
    });
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);
