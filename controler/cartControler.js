const { Cart } = require("../models/cart");

const insertProductToCart = (img, title, description, category) => {
  return new Promise((resolve, reject) => {
    const cart = new Cart({
      img,
      title,
      description,
      category,
    });
    cart.save().then((theBookChosen) => {
      theBookChosen ? resolve(theBookChosen) : reject(err);
    });
  });
};
const getAllProductsInCart = () => {
  return new Promise((resolve, reject) => {
    Cart.find().then((products) => {
      products ? resolve(products) : reject(err);
    });
  });
};

const deleteproductFromCart = (_id) => {
  return new Promise((resolve, reject) => {
    Cart.findByIdAndRemove(_id,
     
     )
     .then((product) => {
      resolve(product);
    })
    .catch((err) => {
      reject(err);
    });
  });
};


module.exports = {
  insertProductToCart,
  getAllProductsInCart,
  deleteproductFromCart,
};
