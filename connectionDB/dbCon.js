const mongoose = require('mongoose');

const url='mongodb://khista:fkgyssk1234@watchguard-shard-00-00-g9dbc.mongodb.net:27017,watchguard-shard-00-01-g9dbc.mongodb.net:27017,watchguard-shard-00-02-g9dbc.mongodb.net:27017/networkparts?ssl=true&replicaSet=parts-shard-0&authSource=admin&retryWrites=true&w=majority';

    const conDB = async()=>{
        await mongoose.connect(url,{
            useUnifiedTopology:true,useNewUrlParser:true
        });
        console.log('Mongoose Db is connected...!');
    }
         
    module.exports =conDB;