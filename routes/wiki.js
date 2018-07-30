const express = require('express');
const router = express();
const { addPage } = require('../views');

router.use(express.urlencoded({ extended: false }));
router.use(express.static(__dirname + '/public'));

router.get('/', (req, res, next) => {
  res.send('Got to users GET /wiki/');
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
