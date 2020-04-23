let API_HOST;
const environment = process.env.NODE_ENV;

if (environment === 'production') {
  API_HOST = 'https://salve-a-quebrada-api.herokuapp.com';
} else {
  API_HOST = 'http://localhost:8080';
}

const API_STORES = `${API_HOST}/v1/stores`;
export { API_STORES };
