const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with hello world!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('hello world!'); // Nota: en minúsculas como en tu App.js
  });
});