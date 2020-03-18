const express = require('express');
const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/AuthController');

// require controllers
const exampleController = require('../controllers/ExampleController');

const UserController = require('../controllers/UsersController');
const SessionController = require('../controllers/SessionController');
const ChatUserController = require('../controllers/ChatUserController');

// inicia o router
const routes = express.Router();

// Requisições sem Token
routes.get('/token', authController.getToken);

routes.post('/authenticate', SessionController.create);

// Requisições com Token
routes.use(authMiddleware);

routes.get('/user/all', UserController.index);
routes.get('/user/:id/find', UserController.show);
routes.post('/user/create', UserController.store);
routes.put('/user/:id/update', UserController.update);
routes.delete('/user/:id/delete', UserController.delete);

routes.get('/user/:user_id/chat', ChatUserController.show);
routes.get('/chat/mychats', ChatUserController.myChats);
routes.post('/chat/create', ChatUserController.store);

// index
routes.get('/', (req, res) => {
  return res.json({ message: `API ${process.env.DATABASE_NAME} Online` });
});

// example
routes.get('/', exampleController.index);

module.exports = routes;
