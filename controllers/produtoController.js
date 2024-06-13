const Produto = require('../models/produto');

exports.listar = async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
};

exports.detalhar = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  res.json(produto);
};

exports.criar = async (req, res) => {
  const novoProduto = await Produto.create(req.body);
  res.json(novoProduto);
};

exports.atualizar = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  await produto.update(req.body);
  res.json(produto);
};

exports.deletar = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  await produto.destroy();
  res.json({ message: 'Produto deletado com sucesso' });
};
