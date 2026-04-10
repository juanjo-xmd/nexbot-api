const User = require('../models/User');

exports.getUser = async (req, res) => {
    const user = await User.findOne({ discordId: req.params.id });
    res.json(user);
};

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};
