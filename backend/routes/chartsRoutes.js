const express = require('express');
<<<<<<< HEAD
const { getChartData } = require('../controller/chartsController');
=======
const { getChartData } = require('../controllers/chartsController');
>>>>>>> 3cbad28 (third commit for update)

const router = express.Router();

router.get('/charts', getChartData);


module.exports = router;