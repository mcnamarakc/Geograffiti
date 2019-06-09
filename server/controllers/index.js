const controllers = require('express').Router();

const apiControllers = require('./api');
const publicControllers = require('./publicApi');

controllers.use('/api', apiControllers);

const cors = require('cors');
const { ApiKeyVerifier } = require('../lib/passport');

controllers.use('/publicapi', cors(), ApiKeyVerifier, publicControllers);

module.exports = controllers;
