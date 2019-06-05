/**
 * Project 3 Starter
 * UNC Charlotte Full-Stack Coding Bootcamp
 */

//-- .env --------------------------------------------------------------------
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

//-- Dependencies ------------------------------------------------------------
const express = require('express');
const logger = require('morgan');

const { passport } = require('./lib/passport');

//-- Constants ---------------------------------------------------------------
const PORT = process.env.PORT || 3001;
const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev';

//-- Express -----------------------------------------------------------------
const app = express();

//-- Middleware --------------------------------------------------------------
app.use(logger(LOG_MODE));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

//-- Static Server (Production) ----------------------------------------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

//-- Controller Routes -------------------------------------------------------
app.use(require('./controllers'));

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

//-- Main --------------------------------------------------------------------
const db = require('./models');
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}...`);
  });
});

//-- Export to Tests ---------------------------------------------------------
module.exports = app;
