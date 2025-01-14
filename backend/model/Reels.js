const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({

    title: { type: String, required: true },
    audioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, default: 'audio/mpeg' },
    likeIcon: { type: String, default: '/uploads/icon/like.png' },
    dislikeIcon: { type: String, default: '/uploads/icon/dislike.png' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    listenedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

}, { timestamps: true });

module.exports = mongoose.model('Musician', reelSchema);
