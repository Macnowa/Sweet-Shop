const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST /api/orders -> Place a new order
router.post('/', orderController.createOrder);

// GET /api/orders/:userId -> Get orders for a user
router.get('/:userId', orderController.getOrdersByUser);

module.exports = router;