const { Schema, model, Types} = require('mongoose');

const inscriptions = new Schema({
    id: {
        type: Number,
        required: true
    },
    students_id: {
        type: Types.ObjectId,
        required: true
    },
    courses_id: {
        type: Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = model('inscriptions', inscriptions);