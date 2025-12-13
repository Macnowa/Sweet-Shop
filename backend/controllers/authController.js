const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // 2. Create new user (In a real app, we would hash the password here!)
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // 2. Check if the password matches
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 3. Success! Send the User ID as a "Token"
    res.status(200).json({ 
      message: 'Login successful', 
      token: user._id,   // <--- THIS WAS MISSING!
      user 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};