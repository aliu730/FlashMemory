const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../dist/public')));
app.get('/', (req,res,next) => {
  console.log(req.url);
  next();
});
app.listen(3000);
