const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Order.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Order API', () => {
  it('should allow a user to place an order', async () => {
    // 1. Create a User
    const user = await User.create({ username: 'buyer', email: 'buyer@test.com', password: '123' });
    
    // 2. Create a Product
    const product = await Product.create({ name: 'Cake', description: 'Yum', price: 100, category: 'Cake' });

    // 3. Place an Order (We pass the User ID manually for now)
    const res = await request(app)
      .post('/api/orders')
      .send({
        userId: user._id,
        products: [{ product: product._id, quantity: 2 }],
        totalAmount: 200
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toEqual('Pending');
    expect(res.body.totalAmount).toEqual(200);
  });
});