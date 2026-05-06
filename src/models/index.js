const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Usuario = require('./Usuario')(sequelize, DataTypes);
const Medicamento = require('./Medicamento')(sequelize, DataTypes);
const Laboratorio = require('./Laboratorio')(sequelize, DataTypes);
const OrdenCompra = require('./OrdenCompra')(sequelize, DataTypes);
const DetalleOrdenCompra = require('./DetalleOrdenCompra')(sequelize, DataTypes);
const OrdenVenta = require('./OrdenVenta')(sequelize, DataTypes);
const DetalleOrdenVenta = require('./DetalleOrdenVenta')(sequelize, DataTypes);

// RELACIONES

// Compras
OrdenCompra.belongsTo(Laboratorio);
OrdenCompra.hasMany(DetalleOrdenCompra);

DetalleOrdenCompra.belongsTo(OrdenCompra);
DetalleOrdenCompra.belongsTo(Medicamento);

// Ventas
OrdenVenta.hasMany(DetalleOrdenVenta);

DetalleOrdenVenta.belongsTo(OrdenVenta);
DetalleOrdenVenta.belongsTo(Medicamento);

module.exports = {
  sequelize,
  Usuario,
  Medicamento,
  Laboratorio,
  OrdenCompra,
  DetalleOrdenCompra,
  OrdenVenta,
  DetalleOrdenVenta
};