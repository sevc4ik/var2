import axios from "axios"

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000,
});

export default api;

