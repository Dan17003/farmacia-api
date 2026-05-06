module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Medicamento', {
    descripcionMed: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    precioVentaUni: DataTypes.FLOAT
  });
};