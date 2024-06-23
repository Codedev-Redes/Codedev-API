const { Schema, model, Types } = require('mongoose');

const transactions = new Schema({
    id: {
        type: Number,
        required: true
    },
    payment_date : {
        type: Date,
        required: true
    },
    inscriptions_students_id : {
        type: Types.ObjectId,
        required: true
    },
    inscriptions_courses_id : {
        type: Types.ObjectId,
        required: true
    },
    payment_methods_id: {
        type: Types.ObjectId,
        required: true
    }
}, { versionKey: false });

module.exports = model('transactions', transactions);