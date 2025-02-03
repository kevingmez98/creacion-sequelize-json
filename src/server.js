const express = require('express');
require('dotenv').config();

const sequelize = require('./conf/database'); // Importar la conexión a la BD


//Configuración aplicacion
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

    
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Escuchar peticiones en el puerto solicitado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});