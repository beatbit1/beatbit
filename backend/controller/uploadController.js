const UploadFile = require("../model/uploadModel");
const Reel = require("../model/Reels");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


// Helper function to create directories if they don't exist
const ensureDirectoriesExist = (dirs) => {
    dirs.forEach((dir) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
};

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
        const iconDir = path.join(uploadDir, "icon");
        
        

         // Ensure directories exist
         ensureDirectoriesExist([imageDir, audioDir, iconDir]);


          // Generate unique file names
        const imageFileName = `${uuidv4()}_${imageFile.name}`;
        const audioFileName = `${uuidv4()}_${audioFile.name}`;

        // Save file paths
        const imagePath = path.join(imageDir, imageFileName);
        const audioPath = path.join(audioDir, audioFileName);

        // const imagePath = path.join(imageDir, imageFile.name);
        // const audioPath = path.join(audioDir, audioFile.name);

        // Move files to respective directories
        await imageFile.mv(imagePath);
        await audioFile.mv(audioPath);

        // Validate category directly from enum values
        const validCategories = UploadFile.schema.path("category").enumValues;
        if (!validCategories.includes(category)) {
            return res.status(400).json({ message: "Invalid category selected." });
        }

        // Dynamically set backend URL based on environment (localhost or production)
        const backendUrl = process.env.BACKEND_URL || `${req.protocol}://${req.get("host")}`;
        const imageUrl = `${backendUrl}/uploads/images/${imageFileName}`;
        const audioUrl = `${backendUrl}/uploads/audio/${audioFileName}`;
        const likeIconUrl = `${backendUrl}/uploads/icon/like.png`;
        const dislikeIconUrl = `${backendUrl}/uploads/icon/dislike.png`;


        // Save metadata to database
        const newUpload = new UploadFile({
            title,
            description,
            fileName: imageFile.name,
            fileType: imageFile.mimetype,
            fileUrl: imageUrl,
            category, 
            shortReels,
            user: req.user ? req.user._id : null,
        });

        await newUpload.save();

        // Sync with Reel model
        const newReel = new Reel({
            title,
            audioUrl, 
            imageUrl,
            likeIcon: likeIconUrl,
            dislikeIcon: dislikeIconUrl,
            uploadedBy: newUpload.user,
        });

        await newReel.save();
        
        res.status(201).json({ message: 'Upload successful', audio: newUpload });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

//GET all reels upload in the frontend
exports.getAllReelUpload = async(rq, res) => {
    try{
        const reelUpload = await Reel.find({});
        res.status(200).json(reelUpload)
    }catch(error){
        res.status(500).json({error: " Fail to get all reel uploads"})
    }
};




// Fetch a single musician by title
exports.getReelByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const musician = await Reel.findOne({ title });
        if (!musician) {
            return res.status(404).json({ error: "Reel not found" });
        }
        res.status(200).json(musician);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch reel" });
    }
};

exports.getCategories = async (req, res) => {
    try {
        // Extract categories directly from the schema
        const categories = UploadFile.schema.path("category").enumValues;
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve categories", error: error.message });
    }
};


//Search Reel
exports.searchReels = async (req, res) => {
    try {
        const { query } = req.query;
        const results = await Reel.find({
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