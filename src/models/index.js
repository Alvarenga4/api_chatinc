const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// carrega os models para inicializa-los
const Model = require('./ExampleModel');

const Users = require('./Users');
const ChatUser = require('./ChatUser');
// cria a conexao com as configuracao do banco de dados
const connection = new Sequelize(dbConfig);

// inicializa os models
Model.init(connection);

Users.init(connection);
ChatUser.init(connection);

/*
//realiza as associacoes
const models = connection.models;
Model.associate(models);
*/
