const request = require('supertest');

const app = require('../src/app');

describe('GET /v1?key=<your_key_here>', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/v1?key=<your_key_here>')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'v1'
      }, done);
  });
});
