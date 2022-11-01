const Cart=require("../models/cart")


const insertProductToCart = (title,description,img,category) => {
    return new Promise((resolve, reject) => {
      const cart = new Cart({
        title,description,img,category
      } );
      cart
        .save()
        .then((theBookChosen) => {
            theBookChosen?resolve(theBookChosen):reject(err)
        })
    });
  };
  const getAllProductsInCart = () => {
    return new Promise((resolve, reject) => {
      Cart.find()
        .then((products) => {
        products?resolve(products):reject(err)
    })
    });
  };
  
  const deleteproductFromCart=(_id)=>{
    return new Promise((resolve, reject) => {
        Cart.deleteOne(
          {},
          {
            _id,
          },
          (err, product) => {
            err ? reject(err) : resolve(product);
          }
          )
      
  })
}
  module.exports={
    insertProductToCart,getAllProductsInCart,deleteproductFromCart
  }