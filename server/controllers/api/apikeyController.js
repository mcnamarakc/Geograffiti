const apikeyController = require('express').Router();

const db = require('../../models');
const { JWTVerifier, ApiKeyVerifier } = require('../../lib/passport');
const uuidAPIKey = require('uuid-apikey');

apikeyController.get('/', JWTVerifier, (req, res) => {
  db.User.findByPk(req.user.id)
    .then(user => {
      const response = {
        id: user.id,
        apiKey: user.apiKey,
        requestLimit: user.requestLimit,
        requestsRemaining: user.requestsRemaining
      };
      res.json(response);
    })
    .catch(err => console.log(err));
});

apikeyController.post('/', JWTVerifier, (req, res) => {
  const apiKey = uuidAPIKey.create().apiKey;
  db.User.update(
    {
      apiKey,
      requestLimit: 1000,
      requestsRemaining: 1000
    },
    {
      where: {
        id: req.user.id
      }
    }
  )
    .then(rowsAffected => {
      console.log(rowsAffected);
      res.json({ apiKey: apiKey });
    })
    .catch(err => console.log(err));
});

apikeyController.delete('/', JWTVerifier, (req, res) => {
  db.User.update(
    {
      apiKey: null,
      requestLimit: null,
      requestsRemaining: null
    },
    {
      where: {
        id: req.user.id
      }
    }
  )
    .then(rowsAffected => {
      console.log(rowsAffected);
      res.json(rowsAffected);
    })
    .catch(err => console.log(err));
});

apikeyController.get('/test', ApiKeyVerifier, (req, res) => {
  res.json({ message: 'API Key Worked!' });
});

module.exports = apikeyController;
