const { Schema, model, Types} = require('mongoose');

const sessions = new Schema({
    id : {
        type: Number,
        required : true
    },
    students_id : {
        type: Types.ObjectId,
        required: true
    },
    mentorship_id : {
        type: Types.ObjectId,
        required: true
    },
    url : {
        type: String,
        required: true
    }
}, {
    createdAt: 'created_at'
}, { versionKey: false });

module.exports = model('sessions', sessions);