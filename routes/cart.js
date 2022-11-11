const express = require("express");
const router = express.Router();
const { validateCart, Cart } = require("../models/cart");

const {
  insertProductToCart,
  getAllProductsInCart,
  deleteproductFromCart,
} = require("../controler/cartControler");

router.post("/addproduct", async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { img, title, description, category } = req.body;
  await insertProductToCart(img, title, description, category)
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
module.exports = router;
