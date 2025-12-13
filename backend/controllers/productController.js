const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};