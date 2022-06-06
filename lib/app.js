const express = require('express');
const zodiac = require('../data/zodiac');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.get('/zodiac/:id', (req, res) => {
  const { id } = req.params;
  res.json(zodiac.find((sign) => sign.id === id));
});
app.get('/zodiac', (req, res) => {
  res.json(zodiac);
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
