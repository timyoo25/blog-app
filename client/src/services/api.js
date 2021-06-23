import axios from 'axios'

let apiUrl;

const apiUrls = {
  production: "https://post-db-app.herokuapp.com/api",
  development: "http://localhost:3000/api"
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}
// axios create method can take an object with a key of baseURL
const api = axios.create({
  baseURL: apiUrl
})

export default api
