const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    rewards: { type: Number, default: 0 },
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
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);