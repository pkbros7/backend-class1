const express = require("express");
const { json } = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userModal } = require("./modals/user");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/testClass").then(() => {
  console.log("db connected successfully");
});

const app = express();

app.use(json());
app.use(cors());

const arr = [];

app.post("/registerUser", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModal.findOne({ email });

    if (findUser) throw new Error("User already registered");

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const createdUser = await userModal.create({
      ...req.body,
      password: hashedPassword,
    });

    res.send({ msg: "User created successfully", data: createdUser });
  } catch (error) {
    res.send({ err: error.message });
  }
});

app.post("/loginUser", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModal.findOne({ email });

    if (!findUser) throw new Error("User not registered");

    const compare = await bcrypt.compare(password, findUser.password);

    if (!compare) throw new Error("Password incorrect");

    res.send({ data: findUser });
  } catch (error) {
    res.send({ err: error.message });
  }
});
app.listen(5500, () => console.log("Server running on port 5500 "));
