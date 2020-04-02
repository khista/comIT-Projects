const mongoose = require('mongoose');

const lan = mongoose.model('lan',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=lan;