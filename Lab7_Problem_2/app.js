const express = require('express');
const crypto = require('crypto');
const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'week2';
const port = process.env.PORT || 3000;

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const mongoPromise = new Promise((resolve, reject) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      reject("connection faild to MongoDB");
    } else {
      resolve(client.db(dbName));
    }
  });
});

const algorithm = 'aes256';
const password = 'asaadsaad';

app.get('/getsecrect', (req, res) => {
  const data =mongoPromise
    .then(async db => {
      const data = await db.collection('homework7').findOne();
      console.log(data);

      const theKey=crypto.createDecipher(algorithm,password);
      let output=theKey.update(data.message,'hex','utf8');
      output +=theKey.final('utf8');
      
      res.status(200).json(output);

    })
    .catch(err => {
      console.log("Error", err.message);
      res.status(500).end('failed');
    });

});

app.listen(port,()=>{
  console.log(`The server is running on port ${port}`)
});


module.exports = app;
