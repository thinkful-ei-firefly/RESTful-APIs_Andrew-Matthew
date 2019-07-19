const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Matt-And";
  const getItems = () => {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = (name) => {
    let newItem = {name};
    newItem = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {method: "POST", headers: new Headers({ 'Content-Type': 'application/json' }), body: newItem});
  }


  return {
    getItems, createItem
  };
})();
