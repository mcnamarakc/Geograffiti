'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: 'Email address is already in use.'
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 20],
          isAlphanumeric: true
        }
      },
      apiKey: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      requestLimit: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      requestsRemaining: {
        type: DataTypes.INTEGER,
        defaultValue: null
      }
    },
    {}
  );

  User.associate = function(models) {
    User.belongsToMany(models.Art, {
      //as: ['userId'],
      through: 'favorites'
    });
  };

  User.prototype.comparePassword = function(challenge) {
    return this.password === challenge;
  };

  return User;
};
