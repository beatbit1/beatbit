const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    fileName: { type: String, required: true },
    fileType: { type: String, default: 'audio/mpeg' },
    fileUrl: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    shortReels: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    musicData: { type: mongoose.Schema.Types.ObjectId, ref: 'MusicData' }, // Link to MusicData

}, { timestamps: true });

module.exports = mongoose.model('Uploads', uploadSchema);
