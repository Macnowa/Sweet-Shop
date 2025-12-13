const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // We need to export app from server.js first
const User = require('../models/User');

// Connect to a test database before running tests
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

// Clean up the database after each test
afterEach(async () => {
  await User.deleteMany();
});

// Close connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });
});