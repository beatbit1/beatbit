const UploadFile = require("../model/uploadModel");
const Category = require("../model/CategoryModel");
const Reel = require("../model/Reels");
const path = require("path");
const fs = require("fs");

exports.uploadAudio = async (req, res) => {
    try {
        const { title, description, category, shortReels } = req.body;

        // Validate uploaded files
        if (!req.files || !req.files.image || !req.files.audio) {
            return res.status(400).json({ message: 'Both image and audio files are required.' });
        }

        const imageFile = req.files.image;
        const audioFile = req.files.audio;

        // Define upload directories
        const uploadDir = path.join(__dirname, '../uploads');
        const imageDir = path.join(uploadDir, 'images');
        const audioDir = path.join(uploadDir, 'audio');
        const iconDir = path.join(uploadDir, 'icon');
        

        // Create directories if they don't exist
        [imageDir, audioDir, iconDir].forEach((dir) => {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        });

        // Save file paths
        const imagePath = path.join(imageDir, imageFile.name);
        const audioPath = path.join(audioDir, audioFile.name);

        // // Move files to respective directories
        await imageFile.mv(imagePath);
        await audioFile.mv(audioPath);



        // Validate category by name
        const categoryExists = await Category.findOne({ name: category });
        if (!categoryExists) {
            return res.status(400).json({ message: 'Invalid category selected.' });
        }

        const backendUrl = process.env.BACKEND_URL || `${req.protocol}://${req.get("host")}`;
        const imageUrl = `${backendUrl}/uploads/images/${imageFile.name}`;
        const audioUrl = `${backendUrl}/uploads/audio/${audioFile.name}`;


        // Save metadata to database
        const newUpload = new UploadFile({
            title,
            description,
            imageUrl, 
            audioUrl, 
            category: categoryExists._id, 
            shortReels,
            likeIcon: `${backendUrl}/uploads/icon/like.png`,
            dislikeIcon: `${backendUrl}/uploads/icon/dislike.png`,

        });

        await newUpload.save();

        // Sync with Reel model
        const newReel = new Reel({
            title,
            audioUrl, 
            imageUrl,
            likeIcon: newUpload.likeIcon,
            dislikeIcon: newUpload.dislikeIcon,
            uploadedBy: newUpload.user,
        });

        await newReel.save();
        
        res.status(201).json({ message: 'Upload successful', audio: newUpload });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getAllUploads = async(rq, res) => {
    try{
        const audios = await UploadFile.find();
        res.status(200).json(audios)
    }catch(error){
        res.status(500).json({error: " Fail to upload audio"})
    }
};


// Controller to fetch uploads by category
exports.getUploadsByCategory = async (req, res) => {
    try {
        const { categoryName } = req.params;

        // Find the category by name
        const category = await Category.findOne({ category: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Fetch uploads by category ID
        const uploads = await UploadFile.find({ category: category._id }).populate('category', 'name');
        res.status(200).json(uploads);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch uploads by category" });
    }
};


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