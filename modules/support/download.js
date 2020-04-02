const mongoose = require('mongoose');

const download= mongoose.model('download',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=download;