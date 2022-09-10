const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const generateAuthToken = (user) => {
  return jwt.sign({ user_id: user._id, biz: user.biz }, "YourPrivateKey", {
    expiresIn: "311111m",
  });
};

const addUser = (name, email, phone, password, biz) => {
  return new Promise((resolve, reject) => {
    let user = new User({
      name,
      email,
      phone,
      password,
      biz,
    });
    user.save((err, userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

module.exports = {
  generateAuthToken,
  addUser
};
