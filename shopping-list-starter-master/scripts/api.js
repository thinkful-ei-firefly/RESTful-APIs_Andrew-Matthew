const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Matt-And";
  const getItems = () => {
    return fetch(`${BASE_URL}/items`).then(res => {
      if (!res.ok) {
        let error =
          "Sorry There Was a Server Error Fetching Your Items Please Try Refreshing This Page";
        store.error = error;
      }
      return res.json();
    });
  };

  const createItem = name => {
    let newItem = { name };
    newItem = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: newItem
    }).then(res => {
      if (!res.ok) {
        let error =
          "Sorry There Was a Server Error Adding That Item Please Try Refreshing This Page";
        store.error = error;
      }

      return res.json();
    });
  };

  const updateItem = (id, updateData) => {
    const newData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: newData
    }).then(res => {
      if (!res.ok) {
        let error = { code: res.status, message: res.message };
        store.error =
          "Sorry There Was a Server Error Updating That Item Please Try Refreshing This Page";
      }

      return res.json();
    });
  };

  const handleDelete = id => {
    return fetch(`${BASE_URL}/items/${id}`, { method: "DELETE" }).then(res => {
      if (!res.ok) {
        let error = { code: res.status, message: res.message };
        store.error =
          "Sorry There Was a Server Error Deleting That Item Please Try Refreshing This Page";
      }

      return res.json();
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    handleDelete
  };
})();
