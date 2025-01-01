const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    rewards: { type: Number, default: 0 },
    likedReels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musician' }],
    watchedReels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musician' }],
    activeListeners: { type: Number, default: 0 },
    uploadedFile: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Uploads' }],
    musicData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MusicData' }],
    stakedTokens: { type: Number, default: 0 },
    stakingHistory: [
        {
            amount: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);