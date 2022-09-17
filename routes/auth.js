const { User } = require("../models/user.js");
const express = require("express");
const bcrypt = require("bcrypt");
// const Joi=require("joi")
const router = express.Router();
const { generateAuthToken}
=require("../controler/userControler")


// router.post("/", async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("Invalid email or password.");

//   const validPassword = await bcrypt.compare(req.body.password, user.password);
//   if (!validPassword) return res.status(400).send("Invalid email or password.");

//   res.json({ token: user.generateAuthToken() });
// });



// function validate(req) {
//   const schema = Joi.object({
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(6).max(1024).required(),
//   });

//   return schema.validate(req);
// }
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