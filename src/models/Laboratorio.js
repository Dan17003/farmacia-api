module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Laboratorio', {
    razonSocial: DataTypes.STRING
  });
};