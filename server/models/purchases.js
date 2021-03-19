const mongoose = require('mongoose');


const purchaseSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true

    },
    visitDate: {
        type: Date,
        require: true,
        trim: true

    },
    kidsTickets: {
        type: Number,
        require: false,
        trim: true
    },
    adultTickets: {
        type: Number,
        require: false,
        trim: true
    },
    
    totalPrice: {
        type: Number,
        require: true,
        trim: true
    },
    purchaseDate: {
        type: Date,
        require: true,
        trim: true
    },
    status: {
        type: String,
        require: true,
        trim: true
    }
});

const purchases = mongoose.model('purchases', purchaseSchema)
module.exports = purchases