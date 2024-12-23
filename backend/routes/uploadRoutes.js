const express = require("express");
const fileUpload = require("express-fileupload");
const { uploadAudio } = require("../controller/uploadController.js")
const router = express.Router();


// Middleware for handling file uploads
router.use(fileUpload());


// Route for uploading audio and image
router.post('/upload', uploadAudio);



module.exports = router;