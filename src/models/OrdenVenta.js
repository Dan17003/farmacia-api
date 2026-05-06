module.exports = (sequelize, DataTypes) => {
  return sequelize.define('OrdenVenta', {
    fechaEmision: DataTypes.DATE
  });
};