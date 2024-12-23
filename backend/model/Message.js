const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    fromWallet: { type: String, required: true },
    toMusician: { type: mongoose.Schema.Types.ObjectId, ref: 'Musician', required: true },
    message: { type: String, required: true },
});

module.exports = mongoose.model('Message', MessageSchema);