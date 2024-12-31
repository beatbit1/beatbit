const connectTON = require('../utils/connectTON');
const { calculateDailyReward } = require('../utils/calculateRewards');

const ton = connectTON();

exports.rewardUser = async (walletAddress, action) => {
    const tokens = calculateDailyReward(action);

    try {
        // Simulate a TON Blockchain transfer
        const transfer = await ton.wallet.transfer({
            to: walletAddress,
            amount: tokens,
            message: "Reward distribution",
        });

        return { success: true, transfer };
    } catch (error) {
        console.error("TON transfer error:", error);
        return { success: false, error };
    }
};