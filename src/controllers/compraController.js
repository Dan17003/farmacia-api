const {
  OrdenCompra,
  DetalleOrdenCompra,
  Medicamento
} = require('../models');

exports.crearCompra = async (req, res) => {
  try {
    const { laboratorioId, detalles } = req.body;

    if (!laboratorioId || !detalles) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const orden = await OrdenCompra.create({
      fechaEmision: new Date(),
      LaboratorioId: laboratorioId
    });

    for (let item of detalles) {
      const { medicamentoId, cantidad, precio } = item;

      const medicamento = await Medicamento.findByPk(medicamentoId);

      if (!medicamento) {
        return res.status(404).json({ error: "Medicamento no existe" });
      }

      // 🔥 AUMENTAR STOCK
      medicamento.stock += cantidad;
      await medicamento.save();

      await DetalleOrdenCompra.create({
        cantidad,
        precio,
        OrdenCompraId: orden.id,
        MedicamentoId: medicamentoId
      });
    }

    res.json({ msg: "Compra registrada correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};