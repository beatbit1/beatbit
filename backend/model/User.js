const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    rewards: { type: Number, default: 0 },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    likedReels: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Musician" // Reference to reels the user liked 
    }],
    watchedReels: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Musician" // Reference to reels the user watched
    }],
    activeListeners: { type: Number, default: 0 },
    uploadedFile: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Uploads' }], // Linked to Uploads
    musicData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MusicData' }], // Linked to MusicData
>>>>>>> 3cbad28 (third commit for update)
=======
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
>>>>>>> 3c7fa4b (fifth commit)
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);