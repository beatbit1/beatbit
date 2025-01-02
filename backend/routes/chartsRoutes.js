const express = require('express');

const { getChartData } = require('../controller/chartsController');


const router = express.Router();

router.get('/charts', getChartData);


module.exports = router;