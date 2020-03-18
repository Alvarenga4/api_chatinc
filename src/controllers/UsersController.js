/* eslint-disable camelcase */
const Users = require('../models/Users');
const crypto = require('crypto');

module.exports = {
  async index (req, res) {
    try {
      const user = await Users.findAll();

      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
  async show (req, res) {
    try {
      const { id } = req.params;

      const user = await Users.findByPk(id);

      return res.json(user);
    } catch (err) {

    }
  },
  async store (req, res) {
    try {
      const {
        name,
        last_name,
        email,
        password
      } = req.body;

      const hashPass = await crypto.createHash('md5').update(password).digest('hex');

      const user = await Users.create({
        name,
        last_name,
        email,
        password: hashPass
      });

      return res.json(user);
    } catch (err) {

    }
  },
  async update (req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        last_name,
        email,
        password
      } = req.body;

      const user = await Users.findByPk(id, {
        name,
        last_name,
        email,
        password
      });

      return res.json(user);
    } catch (err) {

    }
  },
  async delete (req, res) {
    try {

    } catch (err) {

    }
  }
};
