const express = require("express");
const { json } = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userModal } = require("./modals/user");

mongoose.connect("mongodb://localhost:27017/testClass").then(() => {
  console.log("db connected successfully");
});

const app = express();

app.use(json());
app.use(cors());

const arr = [];

app.post("/postData", async (req, res) => {
  try {
    const data = await userModal.create(req.body);

    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.post("/getUserData", async (req, res) => {
  const { email } = req.body;

  const findUser = await userModal.findOne({ email: email });

  if (!findUser) throw new Error("User not registered");

  res.send(findUser);
});
app.listen(5500, () => console.log("Server running on port 5500 "));
