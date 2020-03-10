const express = require('express');
const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/AuthController');

// require controllers
const exampleController = require('../controllers/ExampleController');

// inicia o router
const routes = express.Router();

// Requisições sem Token
routes.get('/token', authController.getToken);

// Requisições com Token
routes.use(authMiddleware);

// index
routes.get('/', (req, res) => {
  return res.json({ message: `API ${process.env.DATABASE_NAME} Online` });
});

// example
routes.get('/', exampleController.index);

module.exports = routes;
