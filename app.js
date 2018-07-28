const express = require('express');
const morgan = require('morgan');
const models = require('./models/');
const main = require('./views/main');
// const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');
const app = express();
module.exports = app;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

module.exports = app;

// app.use('/wiki', wikiRouter);

app.get('/', (req, res) => {
  return res.send(main());
});

models.db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
