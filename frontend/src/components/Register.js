import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.ok) {
      alert('Registration Successful! Please Login.');
      window.location.href = '/login';
    } else {
      alert('Error: ' + data.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Username" 
          value={formData.username} 
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;