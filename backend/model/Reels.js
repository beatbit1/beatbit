const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
    title: { type: String, required: true },
    audioUrl: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, default: 'audio/mpeg' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    watchedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Musician', reelSchema);
=======
  name: { type: String, required: true },
=======
//   name: { type: String, required: true },
>>>>>>> 3f97725 (fourth commit from backend)
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
>>>>>>> 3cbad28 (third commit for update)
