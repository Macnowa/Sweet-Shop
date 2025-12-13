const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');

// Connect to database before tests
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

// Clear database after each test (start fresh)
afterEach(async () => {
  await User.deleteMany();
});

// Close connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Auth API', () => {
  
  // TEST 1: REGISTER
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

  // TEST 2: LOGIN (We add this separate block)
  it('should login an existing user', async () => {
    // First, manually create a user in the database so we have someone to log in as
    await User.create({
      username: 'loginuser',
      email: 'login@example.com',
      password: 'password123'
    });

    // Now try to log in with that user
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'login@example.com',
        password: 'password123'
      });

    // We expect a 200 OK (Success)
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Login successful');
  });

});