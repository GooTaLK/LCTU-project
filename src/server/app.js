const path = require('path');
const express = require('express');

const usersRoute = require('./routes/users.js');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

//  Middlewares
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use('/api', usersRoute);

module.exports = app;
