'user strict';
var dbConn = require('./../../config/db.config');

//Creación de Objeto Residente
var Residente = function(residente){
    this.nombre_residente     		= residente.nombre_residente;
	this.calle      				= residente.calle;
	this.numero_casa     			= residente.numero_casa;
	this.numero_calle    			= residente.numero_calle;
	this.aceptar_visita   			= residente.aceptar_visita;
    this.created_at     			= new Date();
    this.updated_at     			= new Date();
};

Residente.create = function (newResidente, result) {    
    dbConn.query("INSERT INTO residente set ?", newResidente, function (err, res) {
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
Residente.findById = function (id, result) {
    dbConn.query("Select * from residente where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Residente.findAll = function (result) {
    dbConn.query("Select * from residente", function (err, res) {
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
Residente.update = function(id, residente, result){
  dbConn.query("UPDATE residente SET nombre_residente=?,calle=?,numero_casa=?,numero_calle=?,aceptar_visita=? WHERE id = ?", [residente.nombre_residente,residente.calle,residente.numero_casa,residente.numero_calle,residente.aceptar_visita, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Residente.delete = function(id, result){
     dbConn.query("DELETE FROM residente WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Residente;