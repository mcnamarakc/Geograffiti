const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.User.findOne({ where: { email } }).then(user => {
    if (!user || !user.comparePassword(password)) {
      return res.status(401).send('Unauthorized');
    }

    res.json({
      token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
      user
    });
  });
});

usersController.post('/register', (req, res) => {
  const { email, password } = req.body;

  db.User.findOrCreate({
    where: {
      email
    },
    defaults: {
      password
    }
  })
    .then(([user, created]) => {
      console.log(user.email);
      return res.json({
        user: {
          email: user.email,
          id: user.id
        },
        created
      });
    })
    .catch(err => res.json(err));
});

// TODO: change password
// usersController.post('/me', (req, res) => {});
usersController.post('/me', JWTVerifier, (req, res) => {
  db.User.update(
    {
      email: req.body.email
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

module.exports = usersController;
