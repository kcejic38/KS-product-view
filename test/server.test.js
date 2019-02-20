const request = require('supertest');
const app = require('../server/index.js');

describe('Server should route appropriately', () => {
  it ('should respond properly to GET products', (done) => {
    request(app)
    .get('/products')
    .then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    })
  })

  it ('should respond properly to GET images', (done) => {
    request(app)
    .get('/images/?imageID=1')
    .then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    })
  })
})