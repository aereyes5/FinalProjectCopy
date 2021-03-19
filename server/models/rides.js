const mongoose = require('mongoose');


const rideSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        type: String,
        require: true,
        trim: true
    }
});

const rides = mongoose.model('rides', rideSchema)
module.exports = rides