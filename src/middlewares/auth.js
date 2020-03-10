const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Token não informado' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401).send({ message: 'Token errado' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token mal formado' });
  }

  jwt.verify(token, process.env.AUTH_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        error,
        message: 'Token Inválido'
      });
    }

    req.userId = decoded.id;

    return next();
  });
}
;
