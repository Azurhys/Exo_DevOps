const request = require('supertest');

const app = require('../app');

test('GET / renvoie un message de bienvenue', async () => {

  const response = await request(app).get('/');

  expect(response.status).toBe(200);

  expect(response.text).toBe('Bienvenue sur mon serveur Express !');
});

module.exports = {
  forceExit: true,
};