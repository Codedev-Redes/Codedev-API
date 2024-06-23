const mongoose = require('mongoose');
require('dotenv').config({ path: 'server/.env' });
const { MONGODB_HOST, MONGODB_PORT, MONGODB_DB } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`;
//const MONGODB_URI = 'mongodb://48.216.215.51:27017/codedev';

mongoose.connect(MONGODB_URI, {

}).then(db => console.log('DB is connected'))
    .catch(err => console.error(err));