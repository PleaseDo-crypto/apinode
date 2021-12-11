const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Rutas requeridas
const visitanteRoutes = require('./src/routes/visitante.routes')
const guardiaRoutes = require('./src/routes/guardia.routes')
const residenteRoutes = require('./src/routes/residente.routes')
const apidoc = require("./apidoc")

app.use('/api/v1/visitantes', visitanteRoutes)
app.use('/api/v1/guardias', guardiaRoutes)
app.use('/api/v1/residentes', residenteRoutes)
app.use('/api/v1/apidoc', apidoc)

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});