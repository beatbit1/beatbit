const UploadFile = require("../model/uploadModel");
const Reel = require("../model/Reels");
//const { v4: uuidv4 } = require("uuid");
const cloudinary = require('cloudinary').v2;


// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Upload audio and image to Cloudinary
  exports.uploadAudio = async (req, res) => {
    try {
      const { title, description, category, shortReels } = req.body;
  
      // Validate uploaded files
      if (!req.files || !req.files.image || !req.files.audio) {
        return res.status(400).json({ message: "Both image and audio files are required." });
      }
  
      const imageFile = req.files.image;
      const audioFile = req.files.audio;
  
      // Validate category from schema enum
      const validCategories = UploadFile.schema.path("category").enumValues;
      if (!validCategories.includes(category)) {
        return res.status(400).json({ message: "Invalid category selected." });
      }
  
      // Upload files to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.tempFilePath, {
        folder: "beatbit/images",
      });
  
      const audioUpload = await cloudinary.uploader.upload(audioFile.tempFilePath, {
        folder: "beatbit/audio",
        resource_type: "video", // Treat audio files as video in Cloudinary
      });

  
      // Save metadata to database
      const newUpload = new UploadFile({
        title,
        description,
        fileName: imageFile.name,
        fileType: imageFile.mimetype,
        fileUrl: imageUpload.secure_url,
        category,
        shortReels,
        user: req.user ? req.user._id : null,
      });
      await newUpload.save();
  
      // Sync with Reel model
      const newReel = new Reel({
        title,
        audioUrl: audioUpload.secure_url,
        imageUrl: imageUpload.secure_url,
        likeIcon: `${process.env.FRONTEND_URL || "http://localhost:5173"}/icons/like.png`,
    dislikeIcon: `${process.env.FRONTEND_URL || "http://localhost:5173"}/icons/dislike.png`,
        uploadedBy: newUpload.user,
      });
      await newReel.save();
  
      res.status(201).json({ message: "Upload successful", audio: newUpload });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  // Get all uploaded reels
  exports.getAllReelUpload = async (req, res) => {
    try {
      const reelUpload = await Reel.find({});
      res.status(200).json(reelUpload);
    } catch (error) {
      res.status(500).json({ error: "Failed to get all reel uploads" });
    }
  };
  
  // Get a single reel by title
  exports.getReelByTitle = async (req, res) => {
    const { title } = req.params;
    try {
      const reel = await Reel.findOne({ title });
      if (!reel) {
        return res.status(404).json({ error: "Reel not found" });
      }
      res.status(200).json(reel);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reel" });
    }
  };
  
  // Get categories from schema
exports.getCategories = async (req, res) => {
    try {
      const categories = UploadFile.schema.path("category").enumValues; // Fetch enum values
      if (!categories || categories.length === 0) {
        return res.status(404).json({ message: "No categories found." });
      }
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve categories", error: error.message });
    }
  };
  
  // Search reels
  exports.searchReels = async (req, res) => {
    try {
      const { query } = req.query;
      const results = await Reel.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: "Search failed" });
    }
  };