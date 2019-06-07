const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/art', require('./artworkController'));
apiControllers.use('/keys', require('./apikeyController'));
apiControllers.use('/business', require('./businessController'));
apiControllers.use('/favorites', require('./favoritesController'));

module.exports = apiControllers;
