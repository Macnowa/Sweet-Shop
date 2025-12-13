const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST /api/products -> Add a new sweet
router.post('/', productController.addProduct);

// GET /api/products -> Get the menu
router.get('/', productController.getAllProducts);

module.exports = router;