const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    audioUrl: { type: String, required: true },
    category: {
        type: String,
        enum: ["Pop", "Jazz", "Blues", "Rock", "Classical", "Hip-hop"],
        required: true,
    },
    shortReels: { type: Boolean, default: false },
});

module.exports = mongoose.model('Uploads', uploadSchema);
