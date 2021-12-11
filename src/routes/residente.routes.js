const express = require('express')
const router = express.Router()
const reisdenteController = require('../controllers/residente.controller');

// Obtiene todos los registros de los Residentes
router.get('/', reisdenteController.findAll);

// Genera un nuevo registro de Residentes
router.post('/', reisdenteController.create);

// Devuelve el detalle de un solo Residente
router.get('/:id', reisdenteController.findById);

// Modifica un Residente a través del ID
router.put('/:id', reisdenteController.update);

// Elimina a un Residente a través del ID
router.delete('/:id', reisdenteController.delete);

module.exports = router