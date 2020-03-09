const Sequelize = require('sequelize')
const dbconfig = require('../config/database');

//Importacoes de Models

const connection = new Sequelize(dbconfig);

//Inciando Models



module.exports = connection;
