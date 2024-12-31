const express = require('express');
const { updateRewards, connectWallet, getUserDetails } = require('../controller/userController');

const router = express.Router();

router.post("/connect-wallet", connectWallet);
router.get("/user/:walletAddress", getUserDetails)
router.post('/rewards', updateRewards);


module.exports = router;