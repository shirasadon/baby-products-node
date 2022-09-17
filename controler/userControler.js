const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const generateAuthToken = (user) => {
  return jwt.sign({ user_id: user._id, biz: user.biz }, "YourPrivateKey", {
    expiresIn: "311111m",
  });
};

const addUser = (name, phone, password, email, biz) => {
  return new Promise((resolve, reject) => {
    let user = new User({
      name,
      phone,
      password,
      email,
      biz,
    });
    user.save((err, userData) => {
      userData ? resolve(userData) : reject(err);
    });
  });
};

module.exports = {
  generateAuthToken,
  addUser,
};
