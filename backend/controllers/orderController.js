const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;
    const newOrder = new Order({ user: userId, products, totalAmount });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get Orders for a specific User
exports.getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ user: userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};