let API_HOST;

if (process.env.NODE_ENV === 'production') {
  API_HOST = 'https://salve-a-quebrada-api.herokuapp.com';
} else {
  API_HOST = 'http://localhost:8080';
}

const API_STORES = `${API_HOST}/v1/stores`;

export { API_STORES };
