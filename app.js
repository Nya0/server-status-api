const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const indexRouter = require('./routes/index');

mongoose.connect('mongodb://localhost/agent-washington')

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1', indexRouter);

module.exports = app;
