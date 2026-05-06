require('dotenv').config();
const express = require('express');
const app = express();

const { sequelize } = require('./models');

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/medicamentos', require('./routes/medicamentoRoutes'));
app.use('/compras', require('./routes/compraRoutes'));
app.use('/ventas', require('./routes/ventaRoutes'));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
  });
});