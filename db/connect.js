const dotenv = require("dotenv").config();
// import { MongoClient } from 'mongodb';
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDB = callback => {
    if (_db) {
        console.log('DB is already here!');
        return callback(null, _db);
    }
console.log(process.env.DB_URL)
    MongoClient.connect(process.env.DB_URL)
    .then((client) => {
      _db = client;
      // console.log(_db);
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    })
    
}
const getDB = () => {
  if (!_db) {
    throw Error('DB not started yet');
  }
  return _db;
};

module.exports = {initDB, getDB};