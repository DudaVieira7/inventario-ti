const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/equipamentoController');

router.get('/', equipamentoController.listar);
router.post('/', equipamentoController.criar);
router.put('/:id', equipamentoController.atualizar);
router.delete('/:id', equipamentoController.deletar);

module.exports = router;