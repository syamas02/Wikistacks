const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.send('Got to GET /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('Got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.get('Got to GET /wiki/add');
});
module.exports = {
  router,
};
