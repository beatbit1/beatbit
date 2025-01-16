const calculateDailyReward = (activeListeners) => {
    const baseReward = 0.005; // Example reward per listener
    return activeListeners * baseReward;
};

const calculateActionReward = (action) => {
    const rewards = {
        listen: 4, // 4 tokens for listening
        like: 2, // 2 tokens for liking
    };
    return rewards[action] || 0;
};

module.exports = { calculateDailyReward, calculateActionReward };