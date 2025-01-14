const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({

    title: { type: String, required: true },
    audioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, default: 'audio/mpeg' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
<<<<<<< HEAD
    listenedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
=======
    watchedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
>>>>>>> 7a76598f0bc78e07f83d4d124aa06e5d5a6e6ba3

}, { timestamps: true });

module.exports = mongoose.model('Musician', reelSchema);
