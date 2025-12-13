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
  it('should fetch all sweets', async () => {
    // 1. Add two sweets first so we have something to fetch
    await Product.create([
      { name: 'Brownie', description: 'Choco', price: 50, category: 'Pastry' },
      { name: 'Lollipop', description: 'Sweet', price: 10, category: 'Candy' }
    ]);

    // 2. Ask for the menu
    const res = await request(app).get('/api/products');

    // 3. Expect to get 2 items back
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });
});
