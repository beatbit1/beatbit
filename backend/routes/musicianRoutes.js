const express = require('express');
const { getAllMusicians, 
    searchMusicians, 
    addMusician, 
    getMusicianByTitle,
     } = require('../controller/musicianController');
const router = express.Router();

router.get('/', getAllMusicians);
router.post('/add', addMusician);
router.get('/search', searchMusicians);
router.get("/:title", getMusicianByTitle )

module.exports = router;