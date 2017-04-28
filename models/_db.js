const mongoose = require('mongoose');
const bluebird = require('bluebird');
let options = {
  db: { native_parser: true },
  server: { poolSize: 2 },
  promiseLibrary: bluebird,
}

mongoose.connect('mongodb://localhost/weatherDB', options);
mongoose.Promise = bluebird; 

let _db = mongoose.connection;

_db.on('error', console.error.bind(console, 'connection error:'));

_db.once('open', function() {
    console.log('Successfully connected!!!');
});

module.exports = _db;