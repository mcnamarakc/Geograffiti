module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define('Business', {
    latitude: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
      validate: { min: -180, max: 180 }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    stillExists: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  return Business;
};
