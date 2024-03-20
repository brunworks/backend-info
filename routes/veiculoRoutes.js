const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/', veiculoController.listarVeiculos);
router.get('/:id', veiculoController.obterVeiculo);
router.post('/', veiculoController.criarVeiculo);
router.put('/:id', veiculoController.atualizarVeiculo);
router.delete('/:id', veiculoController.deletarVeiculo);

module.exports = router;
