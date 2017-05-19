const mongoose = require('mongoose');
const bluebird = require('bluebird');
const config = require('./../config');

let options = {
  db: { native_parser: true },
  server: { poolSize: 2 },
  promiseLibrary: bluebird,
}

mongoose.connect(`mongodb://${config.databaseUrl}/weatherDB`, options);

mongoose.Promise = bluebird; 

let _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'connection error:'));

_db.once('open', function() {
    console.log('Successfully connected to the DB!!!');
});

module.exports = _db;