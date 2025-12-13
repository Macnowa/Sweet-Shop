import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const userId = localStorage.getItem('token');
      if (!userId) return;
      const res = await fetch(`/api/cart/${userId}`);
      const data = await res.json();
      setCart(data);
    };
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    const userId = localStorage.getItem('token');
    const res = await fetch('/api/cart/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });

    if (res.ok) {
      alert("🎉 Order Placed Successfully! Thank you for shopping!");
      setCart(null); // Clear the screen
      navigate('/'); // Go back to home
    } else {
      alert("Checkout failed.");
    }
  };

  if (!cart || cart.products.length === 0) {
    return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Your Cart is Empty 🛒</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Your Shopping Cart 🛍️</h1>
      
      {cart.products.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>{item.productId.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <p><strong>${item.productId.price * item.quantity}</strong></p>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button 
          onClick={handleCheckout} 
          style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;