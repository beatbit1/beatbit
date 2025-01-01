const User = require('../model/User');
const { calculateDailyReward, calculateActionReward } = require('../utils/calculateRewards');



// Register or Login a user with wallet address
exports.connectWallet = async (req, res) => {
    try {
        const { walletAddress } = req.body;

        if (!walletAddress) {
            return res.status(400).json({ message: 'Wallet address is required' });
        }

        // Check if the user already exists
        let user = await User.findOne({ walletAddress });

        if (!user) {
            // If user doesn't exist, create a new user
            user = await User.create({ walletAddress });
        }

        res.status(200).json({ 
            message: 'Wallet connected successfully', 
            user 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error connecting wallet', error });
    }
};

// Fetch user details by wallet address
exports.getUserDetails = async (req, res) => {
    try {
        const { walletAddress } = req.params;
        const user = await User.findOne({ walletAddress }).populate('likedReels watchedReels uploadedFile');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user details', error });
    }
};


exports.updateRewards = async (req, res) => {
    const { walletAddress, action } = req.body; // action: "watch" or "like"

    try {
        const user = await User.findOne({ walletAddress });
        if (!user) return res.status(404).json({ message: "User not found" });

        const reward = calculateActionReward(action);
        user.rewards += reward;

        if (action === "watch") user.watchedReels += 1;
        if (action === "like") user.likedReels += 1;

        await user.save();

        // Optionally distribute daily rewards
        const dailyReward = calculateDailyReward(user.activeListeners);
        res.status(200).json({
            message: "Rewards updated",
            rewards: user.rewards,
            dailyReward,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating rewards", error });
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3c7fa4b (fifth commit)
};

exports.getTokenDetails = async (req, res) => {
    const { walletAddress } = req.query;

    try {
        const user = await User.findOne({ walletAddress });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            stakedTokens: user.stakedTokens,
            rewards: user.rewards,
        });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

exports.stakeTokens = async (req, res) => {
    const { walletAddress, amount } = req.body;

    try {
        const user = await User.findOne({ walletAddress });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.stakedTokens += amount;
        user.stakingHistory.push({ amount });
        await user.save();

        res.status(200).json({ message: "Tokens staked successfully", stakedTokens: user.stakedTokens });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
<<<<<<< HEAD
=======
>>>>>>> 3cbad28 (third commit for update)
=======
>>>>>>> 3c7fa4b (fifth commit)
};