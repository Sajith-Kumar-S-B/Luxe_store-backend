const menproducts = require('../Models/menproductModel')


// home men products

exports.getHomeMenProductsController = async (req,res)=>{
    try{
        const allMenProducts = await menproducts.find().limit(4)
        res.status(200).json(allMenProducts)

    }catch(err){
         res.status(401).json(err)   
    }
         
}


// all men products

exports.getAllMenProductsController = async (req,res)=>{
    try{
        const allMenProducts = await menproducts.find()
        res.status(200).json(allMenProducts)

    }catch(err){
         res.status(401).json(err)   
    }
         
}


// get a men product


exports.getAMenProductController = async (req,res)=>{
    const {id} = req.params
      try{
          const product = await menproducts.findOne({_id:id})
          res.status(200).json(product)
  
      }catch(err){
          res.status(401).json(err)
      }
  }
