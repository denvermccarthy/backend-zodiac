const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const zodiac = require('../data/zodiac');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('/zodiac should return a list of zodiac data', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac;

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
