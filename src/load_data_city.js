const fs = require('fs');
const Ciudad = require('./models/ciudad');
const sequelize = require('./conf/database');

// Función para cargar el archivo JSON
const loadData = async () => {
  try {
    // Leer y parsear el archivo JSON
    const data = JSON.parse(fs.readFileSync('./data/City.json', 'utf-8'));


    // Iterar sobre el array de departamentos e insertar cada uno
    for (let city of data) {
      await Ciudad.create({
        id: city.id,
        nombre:city.name,
        idDepartamento: city.departmentId
      });
    }


    console.log('Datos insertados exitosamente');
    process.exit(0);
  } catch (error) {
    console.error('Error al insertar los datos:', error);
    process.exit(1);
  }
};

// Ejecutar la función de carga de datos
loadData();
