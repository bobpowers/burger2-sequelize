module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define("burgers", {
      item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
    })
    return burgers;
  };