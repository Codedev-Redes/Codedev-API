const { Schema, model } = require('mongoose');

const mentors = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    modality: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { versionKey: false });

module.exports = model('mentors', mentors);