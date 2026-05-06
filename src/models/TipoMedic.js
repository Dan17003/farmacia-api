module.exports = (sequelize, DataTypes) => {
  return sequelize.define('TipoMedic', {
    descripcion: DataTypes.STRING
  });
};