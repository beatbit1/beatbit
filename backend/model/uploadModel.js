const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
<<<<<<< HEAD
    fileName: { type: String, required: true },
    fileType: { type: String, default: 'audio/mpeg' },
    fileUrl: { type: String, required: true },
=======
    imageUrl: { type: String, required: true },
    audioUrl: { type: String, required: true },
>>>>>>> 7a76598f0bc78e07f83d4d124aa06e5d5a6e6ba3
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    shortReels: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    musicData: { type: mongoose.Schema.Types.ObjectId, ref: 'MusicData' }, // Link to MusicData

}, { timestamps: true });

module.exports = mongoose.model('Uploads', uploadSchema);
