const {
  OrdenVenta,
  DetalleOrdenVenta,
  Medicamento
} = require('../models');

exports.crearVenta = async (req, res) => {
  try {
    console.log("BODY COMPLETO:", req.body);
    console.log("DETALLES:", req.body.detalles);

    const { detalles } = req.body;

    if (!detalles) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const orden = await OrdenVenta.create({
      fechaEmision: new Date()
    });

    for (let item of detalles) {
      const { medicamentoId, cantidad } = item;

      const medicamento = await Medicamento.findByPk(medicamentoId);

      if (!medicamento) {
        return res.status(404).json({ error: "Medicamento no existe" });
      }

      // 🔥 VALIDAR STOCK
      if (medicamento.stock < cantidad) {
        return res.status(400).json({ error: "Stock insuficiente" });
      }

      // 🔥 DISMINUIR STOCK
      medicamento.stock -= cantidad;
      await medicamento.save();

      await DetalleOrdenVenta.create({
        cantidadRequerida: cantidad,
        OrdenVentaId: orden.id,
        MedicamentoId: medicamentoId
      });
    }

    res.json({ msg: "Venta realizada correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};