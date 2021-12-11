'use strict';

const Guardia = require('../models/guardia.model');

exports.findAll = function(req, res) {
  Guardia.findAll(function(err, guardia) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', guardia);
    res.send(guardia);
  });
};


exports.create = function(req, res) {
    const new_Guardia = new Guardia(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Guardia.create(new_Guardia, function(err, guardia) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Empleado añadido satisfactoriamente.",data:guardia});
        });
    }
};


exports.findById = function(req, res) {
    Guardia.findById(req.params.id, function(err, guardia) {
        if (err)
        res.send(err);
        res.json(guardia);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Guardia.update(req.params.id, new Guardia(req.body), function(err, guardia) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Empleado modificado satisfactoriamente.' });
        });
    }
  
};


exports.delete = function(req, res) {
  Guardia.delete( req.params.id, function(err, guardia) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Guard successfully deleted' });
  });
};