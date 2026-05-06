module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DetalleOrdenVenta', {
    cantidadRequerida: DataTypes.INTEGER
  });
};