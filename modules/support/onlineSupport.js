const mongoose = require('mongoose');

const onlineSupport = mongoose.model('onlineSupport',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=onlineSupport;