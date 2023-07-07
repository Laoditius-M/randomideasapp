const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please adda text field']
    },
    tag: {
        type: String
    },
    username: {
        type: String
    },
    date: {
        type: Date,
        default: Date.Now
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);