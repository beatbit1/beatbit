import axios from 'axios';

// Dynamically determine the base URL
const API_URL = VITE_BACKEND_URL;

// Base configuration for axios
const API = axios.create({
    baseURL: API_URL, 
    withCredentials: true, // For sending cookies with requests
});




//upload API call
export const uploadAudio = (formData) => API.post('/upload-file', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
});
export const getAllReelUpload = () => API.get('/upload-file/all-reels');
export const getCategories = () => API.get("/upload-file/categories");
export const searchReels = (query) => API.get(`/upload-file/search`, { params: { query } });
export const getReelByTitle = (title) => API.get(`/upload-file/${title}`);


//Charts API call

export const getChartData = (query) => API.get('/charts', { params: { query } });

//Connect Wallet API call
export const connectWallet = (data) => API.post("/connect-wallet", data);
export const getWalletAddress = (walletAddress) => API.get(`/user/${walletAddress}`);

//Reward API call
export const reward = (data) => API.post('/rewards', data);

//Staking API
export const getTokenDetails = (walletAddress) => API.get(`/tokens`, { params: { walletAddress } });
export const stakeTokens = (walletAddress, amount) => API.post(`/stake`, { walletAddress, amount });

