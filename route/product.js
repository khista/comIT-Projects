const wirelessDevice=require('../modules/products/Wireless');
const lanDevice=require('../modules/products/lan');
const accessDevice=require('../modules/products/accessories');
const computersDevice=require('../modules/products/computers');

const wirelessProduct= async function(req,res){
    const wirless= await wirelessDevice.find().exec();
    const lan = await lanDevice.find().exec();
    const accessory=await accessDevice.find().exec();
    const computer=await computersDevice.find().exec();
    res.render('product',{wirless,lan,accessory,computer})
}

 

module.exports=wirelessProduct;
 