const connectTON = require('../utils/connectTON');
const { calculateDailyReward } = require('../utils/calculateRewards');

const ton = connectTON();

<<<<<<< HEAD
/**
 * Reward a user by transferring tokens to their wallet address.
 * @param {string} walletAddress - The recipient's wallet address.
 * @param {string} action - The action performed to calculate the reward.
 * @param {number} stake - The user's stake that may influence the reward amount.
 * @returns {Promise<{success: boolean, transfer?: object, error?: object}>} - The result of the transfer operation.
 */
exports.rewardUser = async (walletAddress, action, stake) => {
    // Calculate reward tokens considering the action and stake
    const baseTokens = calculateDailyReward(action);
    const tokens = baseTokens * stake; // Adjust reward based on stake
=======
exports.rewardUser = async (walletAddress, action) => {
    const tokens = calculateDailyReward(action);
>>>>>>> 3cbad28 (third commit for update)

    try {
        // Simulate a TON Blockchain transfer
        const transfer = await ton.wallet.transfer({
            to: walletAddress,
            amount: tokens,
<<<<<<< HEAD
            message: `Reward distribution for action: ${action}, stake: ${stake}`,
=======
            message: "Reward distribution",
>>>>>>> 3cbad28 (third commit for update)
        });

        return { success: true, transfer };
    } catch (error) {
        console.error("TON transfer error:", error);
        return { success: false, error };
    }
<<<<<<< HEAD
};

=======
};
>>>>>>> 3cbad28 (third commit for update)
