module.exports = function(sequelize, DataTypes) {
    var Art = sequelize.define("Art", {
        latitude: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: { min: -90, max: 90 }
        },
        longitude: {
            type: DataTypes.DECIMAL,
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
            },
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isUrl: true
            }
          },      
        artistName: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        artistBio: {
            type: DataTypes.STRING
        },
        stillExists: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        }
    });
    return Art;
};
