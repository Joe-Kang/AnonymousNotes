const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Note is required'],
        minlength: [3, 'Note length must be greater than 3']
    }
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);