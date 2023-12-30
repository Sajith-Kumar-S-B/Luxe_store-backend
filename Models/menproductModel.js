const mongoose = require("mongoose")

const menproductSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
      rate:{
        type:Number,
        required:true,
      },
      count:{
        type:Number,
        required:true,
      }
    },


})

const menproducts = mongoose.model("menproducts",menproductSchema)

module.exports = menproducts