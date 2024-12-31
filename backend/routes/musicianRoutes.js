const express = require('express');
const { getAllMusicians, searchMusicians, addMusician, getMusicianByTitle  } = require('../controller/musicianController');
const router = express.Router();

router.get('/musicians', getAllMusicians);
router.post('/add', addMusician);
router.get('/musicians/search', searchMusicians);
router.get("/musicians/:title", getMusicianByTitle )

module.exports = router;