module.exports = (sequelize, DataTypes) => {
  return sequelize.define('OrdenCompra', {
    fechaEmision: DataTypes.DATE,
    total: DataTypes.FLOAT
  });
};