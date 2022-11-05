
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
   const getFurnitureProduct=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find({category:"furniture"})
         .then((product)=>{
            product?resolve(product):reject(err)
         });
     });
   };
   const ViewAllProducts=()=>{
      return new Promise ((resolve,reject)=>{
         Product.find()
         .then((products)=>{
            products?resolve(products):reject(err)
         });
     });
   };

   const updateProduct = (_id, title, description, category,img) => {
      return new Promise((resolve, reject) => {
        Product.findByIdAndUpdate(_id, { $set: { _id, title, description, category,img } })
          .then((product) => {
            resolve(product);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
   
    const deleteProduct = (_id) => {
      return new Promise((resolve, reject) => {
        Product.deleteOne(
          {},
          {
            _id,
          },
          (err, product) => {
            err ? reject(err) : resolve(product);
          }
        );
      });
    };
    module.exports={createProduct,getToysProduct,getBabycarrigesProduct,getChairsaftyProduct,getclothingAndFootweareProduct,getFurnitureProduct,ViewAllProducts,updateProduct,deleteProduct}