const morgan = require("morgan");
const user = require("./routes/user");
const auth = require("./routes/auth");
const article = require("./routes/article");
const products=require("./routes/products")
const cart =require("./routes/cart")
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/BabyStore")
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((e) => console.error(e));

app.use(require("morgan")("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/user", user);
app.use("/auth", auth);
app.use("/articles",article);
app.use("/products",products)
app.use("/cart",cart)
