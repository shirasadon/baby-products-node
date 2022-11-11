const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", schema);

function validateCart(cart) {
  const schema = Joi.object({
    img: Joi.string().min(5).max(1000).required(),
    title: Joi.string().min(5).max(30).required(),
    description: Joi.string().min(6).max(2000).required(),
    category: Joi.string().min(4).max(30).required(),
  });
  return schema.validate(cart);
}

exports.Cart = Cart;

exports.validateCart = validateCart;
