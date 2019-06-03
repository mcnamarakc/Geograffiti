const businessController = require('express').Router();

const db = require('../../models');

businessController.get('/all', (req, res) => {
  db.Business.findAll({
    where: {
      stillExists: true
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

businessController.get('/search', (req, res) => {
  const { type, neighborhood } = req.query;
  console.log(req.query);

  let searchObject = {
    type,
    neighborhood
  };
  // remove keys that are undefined to not overwrite in db
  Object.keys(searchObject).forEach(
    key => searchObject[key] === undefined && delete searchObject[key]
  );
  db.Business.findAll({
    where: {
      ...searchObject,
      stillExists: true
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

businessController.get('/:id', (req, res) => {
  const id = req.params.id;
  db.Business.findByPk(id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

businessController.post('/', (req, res) => {
  console.log('body', req.body);
  const {
    businessName,
    latitude,
    longitude,
    type,
    neighborhood,
    description
  } = req.body;
  // will skip create if image / title / type / neighborhood can be found in db
  db.Business.findOrCreate({
    where: {
      businessName,
      type,
      neighborhood
    },
    defaults: {
      latitude,
      longitude,
      description
    }
  })
    .then(results => res.status(201).json(results))
    .catch(err => console.log(err));
});

businessController.put('/:id', (req, res) => {
  const id = req.params.id;
  const {
    businessName,
    latitude,
    longitude,
    type,
    neighborhood,
    description
  } = req.body;

  let updateObject = {
    businessName,
    latitude,
    longitude,
    type,
    neighborhood,
    description
  };
  // remove keys that are undefined to not overwrite in db
  Object.keys(updateObject).forEach(
    key => updateObject[key] === undefined && delete updateObject[key]
  );
  db.Business.update(updateObject, {
    where: {
      id: id
    }
  })
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

businessController.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.Business.update(
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

module.exports = businessController;
