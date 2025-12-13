import React, { useEffect, useState } from 'react';

function Home() {
  const [sweets, setSweets] = useState([]);

  // 1. Fetch sweets when page loads
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setSweets(data))
      .catch(err => console.error('Error fetching sweets:', err));
  }, []);

  // 2. The new function to handle clicks
  const addToCart = async (productId) => {
    // Get the User ID we saved during login
    const userId = localStorage.getItem('token');

    if (!userId) {
      alert("Please Login first!");
      return;
    }

    // Send the order to the backend
    const res = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productId })
    });

    if (res.ok) {
      alert("Yum! Added to cart 🛒");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🍰 The Sweet Shop Menu 🍩</h1>
      
      {sweets.length === 0 ? (
        <p>Loading sweets...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {sweets.map(sweet => (
            <div key={sweet._id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px', borderRadius: '8px' }}>
              <h3>{sweet.name}</h3>
              <p>{sweet.description}</p>
              <p><strong>${sweet.price}</strong></p>
              {/* 3. We attached the function here! */}
              <button onClick={() => addToCart(sweet._id)} style={{ cursor: 'pointer', backgroundColor: '#ff6b6b', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;