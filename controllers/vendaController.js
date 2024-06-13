const Venda = require('../models/venda');

exports.listar = async (req, res) => {
  const vendas = await Venda.findAll();
  res.json(vendas);
};

exports.detalhar = async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  res.json(venda);
};

exports.criar = async (req, res) => {
  const novaVenda = await Venda.create(req.body);
  res.json(novaVenda);
};

exports.atualizar = async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  await venda.update(req.body);
  res.json(venda);
};

exports.deletar = async (req, res) => {
  const venda = await Venda.findByPk(req.params.id);
  await venda.destroy();
  res.json({ message: 'Venda deletada com sucesso' });
};
