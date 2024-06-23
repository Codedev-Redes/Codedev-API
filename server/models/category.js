const {Schema, model} = require('mongoose');

const category = new Schema({
	id : {
		type: Number,
		required: true,
		unique: true
	},
	name : {
		type: String,
		required: true
	}
}, { versionKey: false});

module.exports = model('categories', category);