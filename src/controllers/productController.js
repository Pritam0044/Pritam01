const productModel = require('../models/productModel');




const createProduct = async function(req, res){
 let data = req.body 
 if( await productModel.exists(data)){
     return res.send({status: false,
        msg : "this product already exist"
     })
 }else{
     let createData = await productModel.create(data)
    return res.send({msg: createData})
 }
}

module.exports.createProduct = createProduct

