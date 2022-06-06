const { Router } = require('express');
const zodiac = require('../../data/zodiac');

module.exports = Router()
  .get('/', (req, res) => {
    res.json(zodiac);
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(zodiac.find((sign) => sign.id === id));
  });
