"use strict";
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function() {
  const addItem = function(item) {
    store.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    const item = this.items.find(item => item.id === id);
    Object.assign(item, newData);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };
  const items = [];
  let error = null;
  return {
    items,
    hideCheckedItems: false,
    searchTerm: "",
    error,
    addItem,
    findById,
    findAndDelete,
    findAndUpdate,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing
  };
})();
