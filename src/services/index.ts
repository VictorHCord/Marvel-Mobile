import axios from 'axios';
const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  headers: {
    'Content-Type': 'application/json'
  }
  
})

export default api;