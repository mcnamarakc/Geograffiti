const axios = require('axios');
const token = process.env.MAPQUEST_TOKEN;
const mapquestController = require('express').Router();

mapquestController.post('/', (req, res) => {
  const { coordinates } = req.body;

  axios
    .get(
      "https://www.mapquestapi.com/directions/v2/optimizedRoute?json={'locations':[" +
        coordinates +
        ']}&outFormat=json&key=' +
        token
    )
    .then(results => res.json(results.data))
    .catch(err => console.log(err));
});

module.exports = mapquestController;
