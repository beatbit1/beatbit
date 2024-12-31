const MusicData = require('../model/MusicData');
const User = require('../model/User');



exports.getChartData = async (req, res) => {
    try {
        const musicData = await MusicData.find({});
        const userStats = await User.aggregate([
            { $group: { _id: null, activeListeners: { $sum: "$activeListeners" } } },
        ]);

        const totalListeners = await MusicData.aggregate([
            { $group: { _id: null, totalListeners: { $sum: "$listeners" } } },
        ]);

        const trending = musicData.map((song) => ({
            title: song.title,
            trendingPercentage: song.trendingPercentage,
        }));

        const marketCaps = musicData.reduce((sum, song) => sum + song.marketCaps, 0);

        res.status(200).json({
            musicData,
            activeListeners: userStats[0]?.activeListeners || 0,
            totalListeners: totalListeners[0]?.totalListeners || 0,
            trending,
            marketCaps,
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching chart data", error });
    }
};