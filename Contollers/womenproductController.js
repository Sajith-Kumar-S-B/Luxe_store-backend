const womenproducts = require('../Models/womenproductModel')


exports.getHomeWomenProductsController = async (req,res)=>{
    try{
        const allWomenProducts = await womenproducts.find().limit(4)
        res.status(200).json(allWomenProducts)

    }catch(err){
         res.status(401).json(err)   
    }
         
}


// get all women products

exports.getAllWomenProductsController = async (req,res)=>{
    try{
        const allWomenProducts = await womenproducts.find()
        res.status(200).json(allWomenProducts)

    }catch(err){
         res.status(401).json(err)   
    }
         
}


// get a men product


exports.getAWomenProductController = async (req,res)=>{
    const {id} = req.params
      try{
          const product = await womenproducts.findOne({_id:id})
          res.status(200).json(product)
  
      }catch(err){
          res.status(401).json(err)
      }
  }
