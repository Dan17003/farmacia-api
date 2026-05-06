module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    rol: DataTypes.ENUM('ADMIN', 'VENDEDOR', 'ALMACEN')
  });
};