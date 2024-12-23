const express = require('express');
const { getAllMusicians, searchMusicians, addMusician } = require('../controller/musicianController');
const router = express.Router();

router.get('/musicians', getAllMusicians);
router.post('/add', addMusician);
router.get('/musicians/search', searchMusicians);

module.exports = router;