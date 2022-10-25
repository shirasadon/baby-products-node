
const {Product}= require("../models/product")

const createProduct=(img,title,description,category)=>{
    return new Promise((resolve,reject)=>{
       let product=new Product({
        img,title,description,category
       })
       product.save((err,productData)=>{
        productData? resolve(productData):reject(err)
       })
    })
    }
    const getToysProduct=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find({category:"toys"})
         .then((productToys)=>{
            productToys?resolve(productToys):reject(err)
         });
     });
   };

   const getBabycarrigesProduct=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find({category:"carriges"})
         .then((productCarriges)=>{
            productCarriges?resolve(productCarriges):reject(err)
         });
     });
   };
   
   const getChairsaftyProduct=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find({category:"chairsafty"})
         .then((producCar)=>{
            producCar?resolve(producCar):reject(err)
         });
     });
   };
   const getclothingAndFootweareProduct=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find({category:"cloth"})
         .then((product)=>{
            product?resolve(product):reject(err)
         });
     });
   };
 
    module.exports={createProduct,getToysProduct,getBabycarrigesProduct,getChairsaftyProduct,getclothingAndFootweareProduct}