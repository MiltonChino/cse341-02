const dotenv = require("dotenv").config();

const MongoClient = require('mongodb').MongoClient;
// const { MongoClient } = require("mongodb");

let _db;

const initDB = (callback) => {
    if (_db) {
        console.log('DB is already here!');
        return callback(null, _db);
    }

    MongoClient.connect(process.env.DB_URL)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
      // console.log(err);
    })
    
}
const getDB = () => {
  if (!_db) {
    throw Error('DB not started yet');
  }
  return _db;
}


module.exports = {initDB, getDB};