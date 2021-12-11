'user strict';
var dbConn = require('../../config/db.config');

//Creación de Objeto Guardia
var Guardia = function(guardia){
    this.nombre_guardia     	= guardia.nombre_guardia;
	this.turno      			= guardia.turno;
    this.numero_empleado     	= guardia.numero_empleado;
	this.created_at     		= new Date();
    this.updated_at     		= new Date();
};

Guardia.create = function (newGuardia, result) {    
    dbConn.query("INSERT INTO guardia set ?", newGuardia, function (err, res) {
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
Guardia.findById = function (id, result) {
    dbConn.query("Select * from guardia where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Guardia.findAll = function (result) {
    dbConn.query("Select * from guardia", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('guardia : ', res);  
            result(null, res);
        }
    });   
};
Guardia.update = function(id, guardia, result){
  dbConn.query("UPDATE guardia SET nombre_guardia=?,turno=?,numero_empleado=? WHERE id = ?", [guardia.nombre_guardia,guardia.turno,guardia.numero_empleado, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Guardia.delete = function(id, result){
     dbConn.query("DELETE FROM guardia WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Guardia;