const calculateDailyReward = (activeListeners) => {
    const baseReward = 0.005; // Example reward per listener
    return activeListeners * baseReward;
};

const calculateActionReward = (action) => {
    const rewards = {
        watch: 4, // 4 tokens for watching
        like: 2, // 2 tokens for liking
    };
    return rewards[action] || 0;
};

module.exports = { calculateDailyReward, calculateActionReward };