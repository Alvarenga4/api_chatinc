/* eslint-disable camelcase */
const ChatUser = require('../models/ChatUser');
const Users = require('../models/Users');

module.exports = {
  async show (req, res) {
    try {
      const { user_id } = req.params;

      const user = await ChatUser.findAll({ where: { user_id } });

      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  },
  async myChats (req, res) {
    try {
      const { id } = req.headers;

      const chat = await ChatUser.findByPk(id);
      const user_send = await Users.findOne({ where: { id: chat.user_id_send } });

      return res.json({ chat, user_send });
    } catch (err) {
      console.log(err);
    }
  },
  async store (req, res) {
    try {
      const {
        user_id_send,
        user_id,
        message
      } = req.headers;

      const chat = await ChatUser.create({
        user_id_send,
        user_id,
        message
      });

      return res.json(chat);
    } catch (err) {
      console.log(err);
    }
  },
  async update (req, res) {
    try {

    } catch (err) {

    }
  },
  async delete (req, res) {
    try {

    } catch (err) {

    }
  }
}
;
