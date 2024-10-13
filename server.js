const bodyParser = require('body-parser');
const express = require('express');
const contactsRoute = require('./routes/contacts');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/', contactsRoute);

mongodb.initDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
