const mongoose = require('mongoose');

const websites = mongoose.model('websites',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=websites;