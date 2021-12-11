
const express = require('express')
const router = express.Router()
const guardiaController = require('../controllers/guardia.controller');

/**
 * @swagger
 * components:
 * 	schemas:
 * 		guardia:
 * 			type: objetc
 * 			
 */



// Obtiene todos los registros de los Guardias
router.get('/', guardiaController.findAll);

// Genera un nuevo registro de Guardias
router.post('/', guardiaController.create);

// Devuelve el detalle de un solo Guardia
router.get('/:id', guardiaController.findById);

// Modifica un Guardia a través del ID
router.put('/:id', guardiaController.update);

// Elimina a un Guardia a través del ID
router.delete('/:id', guardiaController.delete);

module.exports = router
