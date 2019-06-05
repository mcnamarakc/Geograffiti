const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/art', require('./artworkController'));
apiControllers.use('/keys', require('./apikeyController'));
apiControllers.use('/business', require('./businessController'));


module.exports = apiControllers;
