const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Product = require('../models/Product');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Product.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Product API', () => {
  it('should add a new sweet to the inventory', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Chocolate Lava Cake',
        description: 'Delicious molten chocolate center',
        price: 150,
        category: 'Cake'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Chocolate Lava Cake');
  });
});