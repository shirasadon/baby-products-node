const mongoose = require("mongoose");

const Joi = require("joi");
const { string } = require("joi");

const schema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", schema);

function validateProduct(product) {
  const schema = Joi.object({
    img: Joi.string().min(5).max(1000).required(),
    title: Joi.string().min(5).max(30).required(),
    description: Joi.string().min(6).max(2000).required(),
    category: Joi.string().min(4).max(30).required(),
    alt: Joi.string().min(5).max(1000).required(),
  });

  return schema.validate(product);
}

exports.Product = Product;

exports.validateProduct = validateProduct;
