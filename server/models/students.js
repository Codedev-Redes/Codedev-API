const { Schema, model} = require('mongoose');

const student = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false });

student.methods.encryptPassword = async password => {
    const salt = await bcrypt.getsalt(10);
    return await bcrypt.hash(password, salt);
};

student.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model('students', student);