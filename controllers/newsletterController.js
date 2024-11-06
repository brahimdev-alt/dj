const Newsletter = require('../models/Newsletter');

exports.subscribe = async (req, res) => {
    try {
        const newsletter = new Newsletter({ email: req.body.email });
        await newsletter.save();
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};