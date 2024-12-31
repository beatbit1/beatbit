const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  src: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String }, 
  type: { type: String, default: "audio/mpeg" },
  uploadedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" // Reference to the user who uploaded the reel
  },
  likedBy: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" // References users who liked the reel
  }],
  watchedBy: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" // References users who watched the reel
  }],
}, { timestamps: true });

module.exports = mongoose.model('Musician', reelSchema);
