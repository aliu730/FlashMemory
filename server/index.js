const express = require('express');
const path = require('path');
const db = require('../database/db.js');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/public')));

app.use((req,res,next) => {
  // console.log(req.url);
  next();
});

app.get(`/grabData/:user`, (req, res) => {
  db.grabData(req.params.user, function(data) {
    res.send(data);
  });
});

app.post('/postData', (req, res) => {
  db.saveData(req.body.user, req.body.deck);
});

app.listen(3000);
