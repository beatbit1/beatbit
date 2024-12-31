const mongoose = require('mongoose');

const musicDataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    category: { type: String },
    price: { type: Number },
    activeListeners: { type: Number },
    listeners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Linked to User
    marketCaps: { type: Number },
    trendingPercentage: { type: Number },
    uploadedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" // Reference to the user who uploaded this music data
    },
}, { timestamps: true });

module.exports = mongoose.model('MusicData', musicDataSchema);
