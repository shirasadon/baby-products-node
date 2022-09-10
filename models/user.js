const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { isEmail } = require("validator");
const  Joi  = require("joi");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "minimum password length is 6 characters"],
    },
    biz: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

schema.pre("save", async function (next) {
  try {
    const salt = bcrypt.genSalt(10);
    const hashPass = bcrypt.hash(this.password, salt);
    this.password = hashPass;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", schema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(10).required(),
    phone: Joi.string().min(9).max(15).required(),
    userEmail: Joi.string()
      .min(6)
      .max(255)
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().min(6).max(1024).required(),
    biz: Joi.string().required(),
  });

  return schema.validate(user);
}

exports.User = User;


exports.validateUser = validateUser;
