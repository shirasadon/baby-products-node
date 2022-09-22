
const {Product}= require("../models/product")

const createProduct=(img,title,description)=>{
    return new Promise((resolve,reject)=>{
       let product=new Product({
        img,title,description
       })
       product.save((err,productData)=>{
        productData? resolve(productData):reject(err)
       })
    })
    }


    module.exports={createProduct}