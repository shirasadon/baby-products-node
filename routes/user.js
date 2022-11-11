const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.js");
const { addUser } = require("../controler/userControler.js");
router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("user already registered");
  }
  let { name, phone, password, email, biz } = req.body;
  await addUser(name, phone, password, email, biz)
    .then((userData) => {
      res.json(userData);
    })
    .catch((error) => {
      res.json(error);
    });
  console.log(req.body);
});

module.exports = router;
