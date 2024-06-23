const { Schema, model } = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    length: Number,
}, { versionKey: false });

module.exports = model('files', category);