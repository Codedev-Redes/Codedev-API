const mongoose = require('mongoose');
require('dotenv').config({ path: 'server/.env' });
const { MONGODB_HOST, MONGODB_PORT, MONGODB_DB } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`;
//const MONGODB_URI = 'mongodb://4.246.226.191:27017/codedev';

mongoose.connect(MONGODB_URI, {

}).then(db => console.log('DB is connected'))
    .catch(err => console.error(err));