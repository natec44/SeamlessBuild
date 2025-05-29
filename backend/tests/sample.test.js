const request = require('supertest');
const app = require('../server');

describe('API Health Check', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
  });
});
