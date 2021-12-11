const express = require('express')
const router = express.Router()
const visitanteController = require('../controllers/visitante.controller');

// Obtiene todos los registros de los Visitantes
router.get('/', visitanteController.findAll);

// Genera un nuevo registro de Visitante
router.post('/', visitanteController.create);

// Devuelve el detalle de un solo Visitante
router.get('/:id', visitanteController.findById);

// Modifica un Visitante a través del ID
router.put('/:id', visitanteController.update);

// Elimina a un Visitante a través del ID
router.delete('/:id', visitanteController.delete);

module.exports = router