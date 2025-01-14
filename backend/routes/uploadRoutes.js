const express = require("express");
const { uploadAudio, 
    getAllReelUpload, 
    getCategories, 
    searchReels,
    getReelByTitle } = require("../controller/uploadController.js")
const router = express.Router();



// Route for uploading audio and image
router.post('/', uploadAudio);
router.get('/all-reels', getAllReelUpload); 
router.get("/search", searchReels)
router.get("/:title", getReelByTitle )
router.get('/categories', getCategories); // Route for fetching categories dynamically



module.exports = router;