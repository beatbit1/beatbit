const UploadFile = require("../model/uploadModel");
const Category = require("../model/CategoryModel");
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


        // Validate category
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(400).json({ message: 'Invalid category selected.' });
        }

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

exports.getAllUploads = async(rq, res) => {
    try{
        const audios = await UploadFile.find();
        res.status(200).json(audios)
    }catch(error){
        res.status(500).json({error: " Fail to upload audio"})
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve categories" });
    }
};

exports.searchUploads = async (req, res) => {
    try {
        const { query } = req.query;
        const results = await UploadFile.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
            ],
        });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'Search failed' });
    }
};