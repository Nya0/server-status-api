const express = require('express');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');

mongoose.connect('mongodb://localhost/agent-washington')

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use('/api/v1', indexRouter);

module.exports = app;
