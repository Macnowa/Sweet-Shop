const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// When the frontend posts to "/add", run the addToCart logic
router.post('/add', cartController.addToCart);
// Get the cart for a specific user
router.get('/:userId', cartController.getCart);
router.post('/checkout', cartController.checkout);

module.exports = router;