const mongodb = require('../db/connect');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const result = await mongodb.getDB().db('Contacts').collection('Contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
      console.log(lists)
    });
  };

   
const getSingle = async (req, res, next) => {
    const userId = new objectId(req.params.id);
    const result = await mongodb
      .getDB()
      .db('Contacts')
      .collection('Contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
      console.log(lists[0])
    });
  };

module.exports = {getAll, getSingle};