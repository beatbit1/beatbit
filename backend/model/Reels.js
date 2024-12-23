const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  src: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String }, 
  type: { type: String, default: "audio/mpeg" },
});
module.exports = mongoose.model('Musician', reelSchema);