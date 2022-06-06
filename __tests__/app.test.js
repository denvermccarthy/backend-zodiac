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

  test('/zodiac/:id should return a single sign matching the id', async () => {
    const res = await request(app).get('/zodiac/9');
    const expected = { id: '9', name: 'sagittarius' };

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
