<<<<<<< HEAD
<<<<<<< HEAD
const MusicData = require('../model/MusicData');
const User = require('../model/User');
=======
const MusicData = require('../models/MusicData');
const User = require('../models/User');
>>>>>>> 3cbad28 (third commit for update)
=======
const MusicData = require('../model/MusicData');
const User = require('../model/User');
>>>>>>> 3f97725 (fourth commit from backend)



exports.getChartData = async (req, res) => {
<<<<<<< HEAD

    const { query } = req.query; // Get search query from frontend
    const queryParams = {};

    if (query) {
        // Title filter
        queryParams.title = { $regex: query, $options: 'i' }; // Case-insensitive search

        // Price filter (if there are min and max prices in the query)
        if (typeof query === 'string' && query.includes('-')) {
            const [minPrice, maxPrice] = query.split('-');
            if (minPrice && maxPrice) {
                queryParams.price = {
                    $gte: Number(minPrice) || 0,
                    $lte: Number(maxPrice) || Infinity
                };
            }
        }
    }

    try {
        const musicData = await MusicData.find(queryParams);
=======
    try {
        const musicData = await MusicData.find({});
>>>>>>> 3cbad28 (third commit for update)
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