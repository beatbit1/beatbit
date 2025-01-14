const express = require('express');
const { updateRewards, 
    connectWallet, 
    getUserDetails, 
    getTokenDetails,
    stakeTokens
} = require('../controller/userController');

const router = express.Router();

router.post("/connect-wallet", connectWallet);
router.get("/user/:walletAddress", getUserDetails);
//Reward API
router.post('/rewards', updateRewards);

//Staking endpoints
router.get("/tokens", getTokenDetails);
router.post("/stake", stakeTokens);


module.exports = router;