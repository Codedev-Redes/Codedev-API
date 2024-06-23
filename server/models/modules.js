const { Schema, model, Types } = require('mongoose');

const modules = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    resources_id: {
        type: Types.ObjectId,
        required: true
    },
    courses_id: {
        type: Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = model('modules', modules);