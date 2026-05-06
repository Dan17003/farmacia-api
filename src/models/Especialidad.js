module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Especialidad', {
    descripcionEsp: DataTypes.STRING
  });
};