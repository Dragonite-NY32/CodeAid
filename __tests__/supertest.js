const request = require('supertest');

const server = require('../server/server');

afterAll(() => {
  server.close();
});

describe('responds to /', () => {
  describe('GET', () => {
    it('should respond with HTML content, and 200 status', () => request(server)
      .get('/')
      .expect(200)
      .expect('content-type', /text\/html/));
    it('should serve the bundle.js static file from the build folder', () => request(server)
      .get('/bundle.js')
      .expect(200)
      .expect('content-type', /application\/javascript/));
  });
});

describe('responds to errors and unknown routes appropriately', () => {
  describe('GET', () => {
    it('should respond to an unknown route html content and 404 status', () => request(server)
      .get('/nonexistent')
      .expect(404)
      .expect('content-type', /text\/html/)
      .expect('404 Not Found'));
  });

  describe('GET', () => {
    it('should respond with internal error message and 500 status', async () => {
      const response = await request(server).get('/internalError');
      expect(response.status).toEqual(500);
      expect(response.headers['content-type']).toMatch('json');
      expect(response.body.err).toEqual('Something went wrong');
    });
  });
});
