const artworkController = require('express').Router();

const db = require('../../models');

artworkController.get('/all', (req, res) => {
  db.Art.findAll({
    where: {
      stillExists: true
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.get('/search', (req, res) => {
  const { type, neighborhood, artistName, title } = req.query;
  console.log(req.query);

  let searchObject = {
    title,
    type,
    neighborhood,
    artistName
  };
  // remove keys that are undefined to not overwrite in db
  Object.keys(searchObject).forEach(
    key => searchObject[key] === undefined && delete searchObject[key]
  );
  db.Art.findAll({
    where: {
      ...searchObject,
      stillExists: true
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.get('/:id', (req, res) => {
  const id = req.params.id;
  db.Art.findByPk(id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.post('/', (req, res) => {
  console.log('body', req.body);
  const {
    image,
    title,
    latitude,
    longitude,
    type,
    neighborhood,
    description,
    artistName,
    artistBio
  } = req.body;
  // will skip create if image / title / type / neighborhood can be found in db
  db.Art.findOrCreate({
    where: {
      image,
      title,
      type,
      neighborhood
    },
    defaults: {
      latitude,
      longitude,
      description,
      artistName,
      artistBio
    }
  })
    .then(results => res.status(201).json(results))
    .catch(err => console.log(err));
});

artworkController.put('/:id', (req, res) => {
  const id = req.params.id;
  const {
    image,
    title,
    latitude,
    longitude,
    type,
    neighborhood,
    description,
    artistName,
    artistBio
  } = req.body;

  let updateObject = {
    image,
    title,
    latitude,
    longitude,
    type,
    neighborhood,
    description,
    artistName,
    artistBio
  };
  // remove keys that are undefined to not overwrite in db
  Object.keys(updateObject).forEach(
    key => updateObject[key] === undefined && delete updateObject[key]
  );
  db.Art.update(updateObject, {
    where: {
      id: id
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

artworkController.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.Art.update(
    {
      stillExists: false
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

artworkController.get('/all/:column', (req, res) => {
  const column = req.params.column; //neighborhood || artist
  db.Art.findAll({
    attributes: [
      column,
      [db.sequelize.fn('COUNT', db.sequelize.col(column)), 'count']
    ],
    group: [column],
    where: {
      [column]: {
        [db.Sequelize.Op.ne]: null
      }
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

module.exports = artworkController;
