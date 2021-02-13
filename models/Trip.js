const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Collection name on mongodb
const COLLECTION = 'trips';

// Create schema for trip model
const tripSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    start: {
        long: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        }
    },
    start_date: {
        type: Date
    },
    complete_date: {
        type: Date
    }
},
    { collection: COLLECTION }
);

// Create and export trip model for proccsesing on data from mongodb
module.exports = mongoose.model('Trip', tripSchema, COLLECTION);