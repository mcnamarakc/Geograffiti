const artworkController = require('express').Router();

const db = require('../../models');

artworkController.get('/all', (req, res) => {
  db.Artwork.findAll({
    where: {
      active: true
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.get('/search', (req, res) => {
  // const {q, artist, category, area} = req.query;
  console.log(req.query);

  db.Artwork.findAll({
    where: req.query
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.get('/:id', (req, res) => {
  const id = req.params.id;
  db.Artwork.findByPk(id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.post('/', (req, res) => {
  //TODO: if we have unique values then use findOrCreate with defaults for non unique values
  const { image, title, artist } = req.body;
  db.Artwork.create({
    image,
    title,
    artist
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.put('/:id', (req, res) => {
  const id = req.params.id;
  const { image, title, artist } = req.body;
  let updateObject = { image, title, artist };
  // remove keys that are undefined to not overwrite in db
  Object.keys(updateObject).forEach(
    key => updateObject[key] === undefined && delete updateObject[key]
  );
  db.Artwork.update(updateObject, {
    where: {
      id: id
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.Artwork.update(
    {
      active: false
    },
    {
      where: {
        id: id
      }
    }
  )
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

module.exports = artworkController;
