'use strict';

const Visitante = require('../models/visitante.model');

exports.findAll = function(req, res) {
  Visitante.findAll(function(err, visitante) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', visitante);
    res.send(visitante);
  });
};


exports.create = function(req, res) {
    const new_visitante = new Visitante(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Visitante.create(new_visitante, function(err, visitante) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Empleado añadido satisfactoriamente.",data:visitante});
        });
    }
};


exports.findById = function(req, res) {
    Visitante.findById(req.params.id, function(err, visitante) {
        if (err)
        res.send(err);
        res.json(visitante);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Visitante.update(req.params.id, new Visitante(req.body), function(err, visitante) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Empleado modificado satisfactoriamente.' });
        });
    }
  
};


exports.delete = function(req, res) {
  Visitante.delete( req.params.id, function(err, visitante) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Employee successfully deleted' });
  });
};