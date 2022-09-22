const { User } = require("../models/user.js");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { generateAuthToken}
=require("../controler/userControler")

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) res.status(400).send("All input is required");

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await generateAuthToken(user._doc);
      res.status(200).json({ token, user });
    } else
      res
        .status(400)
        .send("Invalid Credentials  !! Check your email and password please!!");
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;