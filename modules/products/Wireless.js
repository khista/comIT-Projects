const mongoose = require('mongoose');

const wireless = mongoose.model('wireless',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=wireless;