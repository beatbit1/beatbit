const express = require('express');
const { updateRewards, connectWallet, getUserDetails, stakeTokens, getTokenDetails } = require('../controller/userController');

const router = express.Router();

router.post("/connect-wallet", connectWallet);
router.get("/user/:walletAddress", getUserDetails);
//Reward API
router.post('/rewards', updateRewards);
router.get("/tokens", getTokenDetails);
router.post("/stake", stakeTokens)


module.exports = router;