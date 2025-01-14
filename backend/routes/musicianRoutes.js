const express = require('express');
<<<<<<< HEAD
const { getAllMusicians, 
    searchMusicians, 
    getMusicianByTitle,
     } = require('../controller/musicianController');
const router = express.Router();

router.get('/', getAllMusicians);
router.get('/search', searchMusicians);
router.get("/:title", getMusicianByTitle )
=======
const { getAllMusicians, searchMusicians, addMusician, getMusicianByTitle  } = require('../controller/musicianController');
const router = express.Router();

router.get('/musicians', getAllMusicians);
router.post('/add', addMusician);
router.get('/musicians/search', searchMusicians);
router.get("/musicians/:title", getMusicianByTitle )
>>>>>>> 7a76598f0bc78e07f83d4d124aa06e5d5a6e6ba3

module.exports = router;