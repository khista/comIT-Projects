const mongoose = require('mongoose');

const computers = mongoose.model('computers',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=computers;