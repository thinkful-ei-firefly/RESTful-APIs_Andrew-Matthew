const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Matt-And";
  const getItems = () => {
    let error;
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = name => {
    let error;
    let newItem = { name };
    newItem = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: newItem
    });
  };

  const updateItem = (id, updateData) => {
    let error;
    const newData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: newData
    });
  };

  const handleDelete = id => {
    let error;
    return fetch(`${BASE_URL}/items/${id}`, { method: "DELETE" }).then(res => {
      if (!res.ok) {
        error = { code: res.status };
      }
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    handleDelete
  };
})();
