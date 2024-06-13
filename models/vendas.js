const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Venda extends Model {}

Venda.init({
  produtoId: DataTypes.INTEGER,
  quantidade: DataTypes.INTEGER,
  data: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Venda'
});

module.exports = Venda;
