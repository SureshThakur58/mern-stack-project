import express from "express";
import User from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// ? register user
router.post("/user/register", async (req, res) => {
  // extract new user from req.body
  const newUser = req.body;

  //  check if user with provided email already exist
  const user = await User.findOne({ email: newUser.email });

  // if user throw error
  if (user) {
    return res.status(409).send({ message: "Email already exist" });
  }

  // ? hash password  before saving user
  const plainPassword = newUser.password;

  // ? salt round => add randomness to generate password
  const saltRound = 10; // 1 to 32

  const hashedPassword = await bcrypt.hash(plainPassword, saltRound);

  //  update user password with hashed password
  newUser.password = hashedPassword;
  // save user
  await User.create(newUser);

  //  save res
  return res.status(201).send({ message: " User is registered successfully." });
});

// ? login user
router.post("/user/login", async (req, res) => {
  //  extract login credential from req.body
  const loginCredential = req.body;

  //  find user using email
  const user = await User.findOne({ email: loginCredential.email });

  //  if not user, throw error
  if (!user) {
    return res.status(404).send({ message: " Invalid credentials" });
  }
  //  check for password match
  const plainPassword = loginCredential.password;
  const hashedPassword = user.password;
  const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);

  //  if not password match , throw error
  if (!isPasswordMatch) {
    return res.status(404).send({ message: " Invalid credentials" });
  }
  //  generate token
  const payload = { email: user.email };
  const signature = process.env.ACCESS_TOKEN_KEY;

  const token = jwt.sign(payload, signature);

  // hide hashed password
  user.password = undefined;

  // send res

  return res
    .status(200)
    .send({ message: "success", accessToken: token, userDetail: user });
});

export default router;
