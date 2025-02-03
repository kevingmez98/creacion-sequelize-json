const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');

const Department = sequelize.define('Departament', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'id_departamento'
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nombre_departamento'
  }
}, {
  tableName: 'departamentos',
  timestamps: false,
  freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
});

module.exports = Department;