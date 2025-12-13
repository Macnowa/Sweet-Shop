const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Cart exists for this user
      let itemIndex = cart.products.findIndex(p => p.productId == productId);

      if (itemIndex > -1) {
        // Product exists in cart, update quantity
        cart.products[itemIndex].quantity++;
      } else {
        // Product does not exist in cart, add new item
        cart.products.push({ productId, quantity: 1 });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      // No cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity: 1 }]
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

// --- THIS IS THE NEW PART ---
exports.getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    // Find the cart and also "populate" (fill in) the product details
    let cart = await Cart.findOne({ userId }).populate('products.productId');
    
    if (!cart) {
      return res.status(200).json({ products: [] }); // Return empty if no cart
    }
    
    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};