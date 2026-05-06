const { Medicamento } = require('../models');

exports.create = async (req, res) => {
  const data = await Medicamento.create(req.body);
  res.json(data);
};

exports.getAll = async (req, res) => {
  const data = await Medicamento.findAll();
  res.json(data);
};

exports.update = async (req, res) => {
  await Medicamento.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ msg: "Actualizado" });
};

exports.delete = async (req, res) => {
  await Medicamento.destroy({
    where: { id: req.params.id }
  });
  res.json({ msg: "Eliminado" });
};