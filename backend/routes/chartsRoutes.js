const express = require('express');

const { getChartData } = require('../controller/chartsController');


const router = express.Router();

router.get('/', getChartData);


module.exports = router;