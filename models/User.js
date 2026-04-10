const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: String,
    rank: { type: String, default: "Civil" },
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
