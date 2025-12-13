const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleSweets = [
  {
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center",
    price: 15,
    category: "Cake"
  },
  {
    name: "Rainbow Cupcake",
    description: "Vanilla cupcake with colorful frosting",
    price: 5,
    category: "Cupcake"
  },
  {
    name: "Glazed Donut",
    description: "Classic sugar glazed donut",
    price: 3,
    category: "Donut"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to DB');
    
    // Clear existing data
    await Product.deleteMany({});
    console.log('🧹 Cleared old sweets');

    // Add new data
    await Product.insertMany(sampleSweets);
    console.log('🍰 Added fresh sweets!');

    mongoose.connection.close();
    console.log('👋 Connection closed');
  } catch (error) {
    console.log('❌ Error:', error);
  }
};

seedDB();