const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger-output.json');

const port = process.env.PORT || 3000;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
