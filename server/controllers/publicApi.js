const publicControllers = require('express').Router();

publicControllers.use('/users', require('./api/usersController'));
publicControllers.use('/art', require('./api/artworkController'));
publicControllers.use('/business', require('./api/businessController'));
publicControllers.use('/favorites', require('./api/favoritesController'));
publicControllers.use('/mapquest', require('./api/mapquestController'));

module.exports = publicControllers;
