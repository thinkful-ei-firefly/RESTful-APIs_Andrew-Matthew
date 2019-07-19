"use strict";
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  api
    .getItems()
    .then(items => {
      items.forEach(item => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => (store.error = err));
  shoppingList.bindEventListeners();
  shoppingList.render();
});
