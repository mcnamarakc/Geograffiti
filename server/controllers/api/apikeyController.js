const apikeyController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');

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
  const apiKey = ''; // generate through an npm package
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
      res.json(rowsAffected);
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

module.exports = apikeyController;
