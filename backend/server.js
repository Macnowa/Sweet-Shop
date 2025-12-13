const express = require('express');
const app = express();
const PORT = 5000;

// This is a simple route to test if the server works
app.get('/', (req, res) => {
  res.send('Welcome to the Sweet Shop API!');
});

// This starts the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});