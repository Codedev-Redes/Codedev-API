const { Schema, model, Types } = require('mongoose');

const courses = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    course_price: {
        type: Number,
        required: true
    },
    categories_id: {
        type: Types.ObjectId,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    mentors_id : {
        type: Types.ObjectId,
        required: true
    }
}, { versionKey: false });

module.exports = model('courses', courses);