const Users = require('../models/Users');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function generateToken (id) {
  return jwt.sign({ id: this.id }, process.env.AUTH_SECRET, {
    expiresIn: 86400
  });
}

module.exports = {
  async create (req, res) {
    try {
      const { email, password } = req.headers;

      const user = await Users.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ err: 'User not found!' });
      }

      const isPassword = await crypto.createHash('md5').update(password).digest('hex');

      if (isPassword !== user.password) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      const token = generateToken(user.idUsers);

      console.log(req.headers);
      return res.json({
        user,
        token
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'User authentication failed' });
    }
  }
}
;
