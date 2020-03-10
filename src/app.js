const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// inicia a conexao com banco de dados
// e carrega os models
require('./models');

// carrega os routes
const routes = require('./routes');

const app = express();

// adiciona plugin ao router
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routers
app.use(routes);

module.exports = app;
