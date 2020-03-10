const jwt = require('jsonwebtoken');

class AuthController {
  getToken (req, res) {
    const { id } = req.params;
    const token = jwt.sign({ id }, process.env.AUTH_SECRET
      /* , {
          expiresIn: 86400
      } */
    );
    return res.status(200).send({
      token
    });
  }
}

module.exports = new AuthController();
