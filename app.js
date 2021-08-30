const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const indexRouter = require('./routes/index');

mongoose.connect('mongodb://localhost/agent-washington')

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

app.use('/api/v1', indexRouter);

module.exports = app;
