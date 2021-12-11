'use strict';

const express = require('express');
const app = express();

const swaggerJsDoc  = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const swaggerOptions = { 
    swaggerDefinition:{
        info:{ 
            version: "1.0.0",
            title: "Doc Api residencial",
            description:"Documentación Api para pruebas",
            contact:{
                name:"Alex Palma",
                url:""
            },
            servers:["http://localhost:5000"]
        }
    },
    basePath: "/",
    apis:["./apidoc.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));




module.exports = app;