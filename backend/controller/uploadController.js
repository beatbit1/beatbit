const UploadFile = require("../model/uploadModel");
const path = require("path");
const fs = require("fs");

exports.uploadAudio = async(req, res) => {
    try {
        const { title, description, category, shortReels } = req.body;

        // Validate uploaded files
        if (!req.files || !req.files.image || !req.files.audio) {
            return res.status(400).json({ message: 'Both image and audio files are required.' });
        }

        const imageFile = req.files.image;
        const audioFile = req.files.audio;

        // Save files
        const imagePath = path.join(__dirname, '../uploads/images/', imageFile.name);
        const audioPath = path.join(__dirname, '../uploads/audio/', audioFile.name);

        imageFile.mv(imagePath);
        audioFile.mv(audioPath);

        // Save metadata to database
        const newUpload = new UploadFile({
            title,
            description,
            imageUrl: `/uploads/images/${imageFile.name}`,
            audioUrl: `/uploads/audio/${audioFile.name}`,
            category,
            shortReels,
        });

        await newUpload.save();
        res.status(201).json({ message: 'Upload successful', audio: newUpload });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}