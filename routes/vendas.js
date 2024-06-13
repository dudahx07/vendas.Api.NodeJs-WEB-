const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

router.get('/', vendaController.listar);
router.get('/:id', vendaController.detalhar);
router.post('/', vendaController.criar);
router.put('/:id', vendaController.atualizar);
router.delete('/:id', vendaController.deletar);

module.exports = router;
