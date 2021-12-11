'user strict';
var dbConn = require('./../../config/db.config');

//Creación de Objeto Visitante
var Visitante = function(visitante){
    this.nombre     		= visitante.nombre;
	this.telefono      		= visitante.telefono;
    this.numero_ine     	= visitante.numero_ine;
    this.placas_auto    	= visitante.placas_auto;
    this.calle   			= visitante.calle;
    this.hora_entrada   	= visitante.hora_entrada;
    this.numero_casa   		= visitante.numero_casa;
    this.cantidad_personas  = visitante.cantidad_personas;

};

Visitante.create = function (newVisitante, result) {    
    dbConn.query("INSERT INTO visitante set ?", newVisitante, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Visitante.findById = function (id, result) {
    dbConn.query("Select * from visitante where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Visitante.findAll = function (result) {
    dbConn.query("Select * from visitante", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('visitante : ', res);  
            result(null, res);
        }
    });   
};
Visitante.update = function(id, visitante, result){
  dbConn.query("UPDATE visitante SET nombre=?,telefono=?,numero_ine=?,placas_auto=?,calle=?,hora_entrada=?,numero_casa=?,cantidad_personas=?,id_residente=? WHERE id = ?", [visitante.nombre,visitante.telefono,visitante.numero_ine,visitante.placas_auto,visitante.calle,visitante.hora_entrada,visitante.numero_casa,visitante.cantidad_personas,visitante.id_residente, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Visitante.delete = function(id, result){
     dbConn.query("DELETE FROM visitante WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Visitante;