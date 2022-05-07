const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const myApiKey = '3hw8RYqnMx0YNQ7iHXRW';
const axios = require('axios');

export default axios.create({
  baseURL: apiURL + myApiKey,
  headers: {
    'Content-type': 'application/json',
  },
});
