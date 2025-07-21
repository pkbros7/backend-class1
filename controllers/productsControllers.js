const { productsModal } = require("../modals/products");

module.exports.addProduct = async (req, res) => {
  try {
    const data = await productsModal.insertOne({
      ...req.body,
      createdAt: new Date().toLocaleString(),
    });

    res.send({
      msg: "Product added successfully",
      data,
    });
  } catch (error) {
    res.send({ err: error.message });
  }
};
