const wireles = require('../../../modules/products/Wireless');

const adminCreateWireless = async (req , res)=>{
    const  newWireless = {
        name:req.body.name,
        description: req.body.description,
        power:req.body.power,
        frequincy:req.body.frequincy,
        price:req.body.price,
        image:req.body.image
    }
    
   const detalis= await new wireles(newWireless).save()
    console.log(detalis);
  
    res.redirect('/admin');
}

module.exports = adminCreateWireless;