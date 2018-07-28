const app = require('./app');
const PORT = process.env.PORT || 1337;
const models = require('./models');
// app.listen(PORT, () => {
//   console.log(`App listening to port ${PORT}.`);
// });

const init = async () => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}.`);
  });
};
init();
