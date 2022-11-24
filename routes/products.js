const express = require("express");
const router = express.Router();
const auth = require("../midelweare/auth");
const { validateProduct, Product } = require("../models/product");
const {
  createProduct,
  getToysProduct,
  getBabycarrigesProduct,
  getChairsaftyProduct,
  getclothingAndFootweareProduct,
  getFurnitureProduct,
  ViewAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controler/productsControler");
router.post("/", auth, async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { img, title, description, category, alt,price } = req.body;
  createProduct(img, title, description, category, alt,price)
    .then((dataProduct) => {
      res.json(dataProduct);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/toys", auth, (req, res) => {
  getToysProduct()
    .then((toys) => {
      res.json(toys);
    })
    .catch((err) => res.json(err));
});

router.get("/babycarriges", auth, (req, res) => {
  getBabycarrigesProduct()
    .then((carriges) => {
      res.json(carriges);
    })
    .catch((err) => res.json(err));
});

router.get("/chairsafty", auth, (req, res) => {
  getChairsaftyProduct()
    .then((chairsafty) => {
      res.json(chairsafty);
    })
    .catch((err) => res.json(err));
});

router.get("/clothingandfootweare", auth, (req, res) => {
  getclothingAndFootweareProduct()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.json(err));
});
router.get("/furniture", auth, (req, res) => {
  getFurnitureProduct()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.json(err));
});

router.get("/ViewAllProducts", auth, (req, res) => {
  ViewAllProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => res.json(err));
});
router.put("/:id", auth, (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const category = req.body.category;
  const img = req.body.img;
  const alt = req.body.alt;
  const price=req.body.price

  updateProduct(id, title, description, category, img, alt,price)
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", auth, (req, res) => {
  const id = req.params.id;
  console.log(id);
  deleteProduct(id)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
