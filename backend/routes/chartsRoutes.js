const express = require('express');
const { getChartData } = require('../controllers/chartsController');

const router = express.Router();

router.get('/charts', getChartData);


module.exports = router;