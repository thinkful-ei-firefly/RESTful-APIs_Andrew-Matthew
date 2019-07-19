const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Matt-And";
  const getItems = () => {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = name => {
    let newItem = { name };
    newItem = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: newItem
    });
  };

  const updateItem = (id, updateData) => {
    updateData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: new Headers({"Content-Type": "application/json" }),
      body: updateData
    })
  }

  return {
    getItems,
    createItem,
    updateItem
  };
})();
