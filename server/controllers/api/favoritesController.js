const favoritesController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');

favoritesController.get('/', JWTVerifier, (req, res) => {
  const id = req.user.id;
  db.User.findOne({ where: { id }, include: [db.Art] }).then(user => {
    res.json({ favorites: user.Arts });
  });
});

favoritesController.post('/', JWTVerifier, (req, res) => {
  const ArtId = req.body.ArtId;
  const UserId = req.user.id;
  db.User.findOne({ where: { id: UserId } }).then(user => {
    if (!user) {
      return console.log('no user with this id', UserId);
    }
    return db.Art.findOne({ where: { id: ArtId } }).then(art => {
      if (!art) {
        return console.log('no art with this id', ArtId);
      }
      user.addArt(art);
      res.sendStatus(201);
    });
  });
});

favoritesController.delete('/:id', JWTVerifier, (req, res) => {
  const ArtId = req.params.id;
  const UserId = req.user.id;
  db.favorites.destroy({ where: { ArtId, UserId } })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

// favoritesController.get('/me', JWTVerifier, (req, res) => {
//   res.json(req.user);
// });

// favoritesController.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   db.User.findOne({ where: { email } }).then(user => {
//     if (!user || !user.comparePassword(password)) {
//       return res.status(401).send('Unauthorized');
//     }

//     delete user.password;

//     res.json({
//       token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
//       user
//     });
//   });
// });

// favoritesController.post('/register', (req, res) => {
//   const { email, password } = req.body;

//   db.User.findOrCreate({
//     where: {
//       email
//     },
//     defaults: {
//       password
//     }
//   })
//     .then(([user, created]) => {
//       console.log(user.email);
//       return res.json({
//         user: {
//           email: user.email,
//           id: user.id
//         },
//         created
//       });
//     })
//     .catch(err => res.json(err));
// });

// favoritesController.post('/me', JWTVerifier, (req, res) => {
//   db.User.update(
//     {
//       email: req.body.email
//     },
//     {
//       where: {
//         id: req.user.id
//       }
//     }
//   )
//     .then(rowsAffected => {
//       console.log(rowsAffected);
//       res.json(rowsAffected);
//     })
//     .catch(err => console.log(err));
// });

module.exports = favoritesController;
