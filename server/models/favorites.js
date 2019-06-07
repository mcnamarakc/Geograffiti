module.exports = function (sequelize, DataTypes) {
  var Favorites = sequelize.define('favorites', {});

  return Favorites;
};
