const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    audioUrl: { type: String, required: true }, // Updated to store Cloudinary URL
    imageUrl: { type: String, required: true }, // Updated to store Cloudinary URL
    likeIcon: { 
      type: String, 
      default: "/icons/like.png", 
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\.(png|jpg|jpeg|svg)$/.test(v); // URL validation for images
        },
        message: 'Invalid like icon URL format',
      },
    },
    dislikeIcon: { 
      type: String, 
      default: "/icons/dislike.png",
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\.(png|jpg|jpeg|svg)$/.test(v); // URL validation for images
        },
        message: 'Invalid dislike icon URL format',
      },
    },
    type: { type: String, default: 'audio/mpeg' },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    listenedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Musician', reelSchema);

