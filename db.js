const mongoose = require('mongoose');
require('dotenv').config();

// Create mongodb connection and export it for global usage
module.exports = () => {
    
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('open', () => {
        console.info('MongoDB: Connected!');
    });

    mongoose.connection.on('error', (err) => {
        console.error(err);
    });

    mongoose.Promise = global.Promise;
}