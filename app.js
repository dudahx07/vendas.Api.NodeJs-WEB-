const express = require('express');
const sequelize = require('./config/database'); 
const Produto = require('./models/produto'); 

const app = express();

// Sincronize o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});

// Middleware e rotas

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
