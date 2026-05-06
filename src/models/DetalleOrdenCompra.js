module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DetalleOrdenCompra', {
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  });
};