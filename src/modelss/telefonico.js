'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class telefonico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      telefonico.belongsTo(models.Pessoas,{
        foreignKey:'pessoa_id'
      })
    }
  };
  telefonico.init({
    telefone_um: DataTypes.INTEGER,
    telefone_dois: DataTypes.INTEGER,
    telefone_tres: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'telefonico',
  });
  return telefonico;
};