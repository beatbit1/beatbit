const express = require("express");
const { uploadAudio, 
    getAllUploads, 
    getCategories, 
    searchUploads } = require("../controller/uploadController.js")
const router = express.Router();


// Middleware for handling file uploads
router.use(fileUpload());


// Route for uploading audio and image
router.post('/', uploadAudio);
router.get('/all', getAllUploads); 
router.get("/search", searchUploads)
router.get('/categories', getCategories); // Route for fetching categories dynamically



module.exports = router;