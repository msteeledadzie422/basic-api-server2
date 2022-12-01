'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandlers = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('root directory');
});

app.get('/bad', (req, res, next) => {
  next('bad route');
});

app.get('/clothes', validator, (req, res, next) => {
  res.status(200).send();
});

app.get('/food', validator, (req, res, next) => {
  res.status(200).send();
});

app.use('*', notFound);

app.use(errorHandlers);

function start(){
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}

module.exports = { app, start };