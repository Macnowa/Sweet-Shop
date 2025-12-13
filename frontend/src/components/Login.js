import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- 1. Import the navigation tool

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // <--- 2. Activate the tool

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    
    if (res.ok) {
      // Save the token so the browser remembers you are logged in
      localStorage.setItem('token', data.token); 
      
      alert('Login Successful!'); 
      navigate('/'); // <--- 3. Smoothly jump to the Menu page
    } else {
      alert('Error: ' + data.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;