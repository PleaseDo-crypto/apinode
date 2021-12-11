'use strict';

const Residente = require('../models/residente.model');

exports.findAll = function(req, res) {
  Residente.findAll(function(err, residente) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', residente);
    res.send(residente);
  });
};


exports.create = function(req, res) {
    const new_residente = new Residente(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Residente.create(new_residente, function(err, residente) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Residente añadido satisfactoriamente.",data:residente});
        });
    }
};


exports.findById = function(req, res) {
    Residente.findById(req.params.id, function(err, residente) {
        if (err)
        res.send(err);
        res.json(residente);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Residente.update(req.params.id, new Residente(req.body), function(err, residente) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Residente modificado satisfactoriamente.' });
        });
    }
  
};


exports.delete = function(req, res) {
  Residente.delete( req.params.id, function(err, residente) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Residente eliminado satisfactoriamente' });
  });
};