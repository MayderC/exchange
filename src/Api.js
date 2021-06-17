function getData() {
  const api = "https://api.coincap.io/v2";
  return fetch(`${api}/assets?limit=20`).then((response) => response.json());
}

export default {
  getData,
}