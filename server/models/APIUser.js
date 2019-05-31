module.exports = function(sequelize, DataTypes) {
    var APIUser = sequelize.define("APIUser", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: "Email address is already in use."
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
        allowNull: false,
        validate: {
            len: [1],
            isAlphanumeric: true
          }
        },
      requestLimit: {
        type: DataTypes.INTEGER
      },
      requestsRemaining: {
        type: DataTypes.INTEGER
      }
    });
    return APIUser;
  };
