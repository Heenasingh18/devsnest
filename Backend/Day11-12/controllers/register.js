const user = require("../models/mongo");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await user.findOne({ where: { email } }).exec();
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new user({
      email: email.toLowerCase(),
      password: hash,
      fullName: "heena",
    });
    const savedUser = await newUser.save();

    res.status(201).send("User registered");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong.");
  }
};

module.exports = register;