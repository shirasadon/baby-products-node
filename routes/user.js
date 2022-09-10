const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.js");
const {addUser}=require ("../controler/userControler.js")
router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("user already registered");
  }
  let { name, email, phone, password,biz } = req.body;
  await addUser(name,email, phone, password,biz)
  .then((userData)=>{
    res.json(userData)
  }).catch((error)=>{
res.json(error)
  })
  console.log(req.body);
});

module.exports = router;