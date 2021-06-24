const config = require('config');
const mongoose = require('mongoose');

const connection = config.get('db.connection');
const options = config.get('db.options');

function init() {
  mongoose.connect(connection, options);

  mongoose.connection.on('error', (error) => {
    console.error('error', error);
  });

  mongoose.connection.on('open', () => {
    console.log('Db connection is open and ready to use');
  });
}

module.exports = {
  init,
};