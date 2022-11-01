const express=require("express")
const router= express.Router()
const {insertProductToCart,getAllProductsInCart,deleteproductFromCart}=require("../controler/cartControler")
router.post("/", async(req, res) => {
    const {title,description,category,img} = req.body   
   await insertProductToCart(title,description,category,img)
      .then((theProductChosen) => res.json(theProductChosen))
      .catch((err) => res.json(err));
  });


  router.get("/", (req, res) => {
    getAllProductsInCart()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    deleteproductFromCart(id)
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  module.exports = router ;
  