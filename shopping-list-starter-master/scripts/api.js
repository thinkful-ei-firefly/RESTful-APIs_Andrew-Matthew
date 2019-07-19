const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Matt-And";
  const getItems = () => {
    return fetch(`${BASE_URL}/items`);
  };
  return {
    getItems
  };
})();
