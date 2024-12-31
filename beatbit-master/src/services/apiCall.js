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

//upload API call
export const uploadAudio = (formData) => API.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
});
export const getAllUploads = () => API.get('/all');
export const getCategories = () => API.get("/categories");
export const searchUpload = () => API.get("/search");

//Charts API call
export const getChartData = () => API.get('/charts');



//Connect Wallet API call
export const connectWallet = (data) => API.post("/connect-wallet", data);
export const getWalletAddress = (walletAddress) => API.get(`/user/${walletAddress}`);
export const reward = (data) => API.post('/rewards', data);