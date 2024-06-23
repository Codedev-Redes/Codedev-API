const { Schema, model, Types } = require('mongoose');

const comments = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    students_id: {
        type: Types.ObjectId,
        required: true
    },
    courses_id: {
        type: Types.ObjectId,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    }
}, { versionKey: false });

module.exports = model('comments', comments);