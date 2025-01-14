const express = require('express');
const { getAllMusicians, 
    searchMusicians, 
    getMusicianByTitle,
     } = require('../controller/musicianController');
const router = express.Router();

router.get('/', getAllMusicians);
router.get('/search', searchMusicians);
router.get("/:title", getMusicianByTitle )

module.exports = router;