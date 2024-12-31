const express = require('express');
<<<<<<< HEAD
<<<<<<< HEAD
const { getChartData } = require('../controller/chartsController');
=======
const { getChartData } = require('../controllers/chartsController');
>>>>>>> 3cbad28 (third commit for update)
=======
const { getChartData } = require('../controller/chartsController');
>>>>>>> 3f97725 (fourth commit from backend)

const router = express.Router();

router.get('/charts', getChartData);


module.exports = router;