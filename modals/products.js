const mongoose = require("mongoose");

const productsModal = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  productImages: {
    type: Array,
    // required: true,
  },
  tags: {
    type: Array,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  inventory: {
    type: String,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports.productsModal = mongoose.model("products", productsModal);
