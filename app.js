const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const wikiRouter = require('./routes/wiki');
//const userRouter = require('./routes/user');
const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//app.use(('/wiki', wikiRouter));

app.get('/', (req, res) => {
  return res.send(main());
});
