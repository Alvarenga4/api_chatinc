const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: `API ${process.env.DATABASE_NAME} Online` })
})

module.exports = routes;
