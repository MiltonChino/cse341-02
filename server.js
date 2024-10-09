const bodyParser = require('body-parser')
const express = require("express")
const app = express();

const routes = require("express").Router();

// MongoDB Imports

const mongodb = require("./db/connect");

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Maria Martinez");
// });
// app.get("/helaman", (req, res) => {
//   res.send("Hello Helaman");
// });
// Display contact information here
// app.get("/contacts", (req, res) => {
//   res.send("Contacts");
// });

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
app.use('/',require('./routes'))

app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});

mongodb.initDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    // app.listen(port);
    console.log(`Connected to DB and listening on ${port}`)
  }
}); 



// MongoDB Implementation
// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   // const uri = proces.env.DB_URL;
//   // console.log(process.env.DB_URL)
//   const client = new MongoClient(process.env.DB_URL);

//   await client.connect();
//   await listDatabases(client);
//   try {
//     // check what we need here
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }
// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// main().catch(console.error);
