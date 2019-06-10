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

module.exports = favoritesController;
