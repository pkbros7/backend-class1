const mongoose = require("mongoose");

const userModal = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
    required: false,
  },
  businessName: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
  },
});

module.exports.userModal = mongoose.model("users", userModal);
