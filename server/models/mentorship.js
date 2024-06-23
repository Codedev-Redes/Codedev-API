const { Schema, model, Types } = require('mongoose');

const mentorship = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    mentors_id: {
        type: Types.ObjectId,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
}, { versionKey: false });

module.exports = model('mentorships', mentorship);