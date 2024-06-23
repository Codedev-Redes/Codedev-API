const { Schema, model } = require('mongoose');

const payment_methods = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, { versionKey: false });

module.exports = model('payment_methods', payment_methods);