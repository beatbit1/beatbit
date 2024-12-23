import axios from 'axios';

// Base configuration for axios
const API = axios.create({
    baseURL: 'http://localhost:4000/api/v2', 
    withCredentials: true, // For sending cookies with requests
});

//Reels API
export const musicians = () => API.get("/musicians");
export const addMusician = (data) => API.post("/add", data);
export const searchMusicians = (query) => API.get(`/musicians/search`, { params: { query } });


//Upload API call
export const upload = (data) => API.post("/upload", data);