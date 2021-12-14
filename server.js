const app = require('./app');
const mongoose = require('mongoose');

const PORT = 3003;

const mongoUri =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGO_URI
    : process.env.MONGO_URI;

console.log('AHGGGGGGGHHHHHHHHHHHH!!!', mongoUri);

mongoose.connect(mongoUri);

const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV != 'test') {
    console.log(`Server running on port ${PORT}`);
  }
  return;
});

app.killServer = async () => {
  server.close();
  await mongoose.connection.close(true);
};

module.exports = app;
