const { User } = require('../models/user');

const authenticate = (req, res, next) => {
  const token = req.header('X-Auth');

  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject();
      }
      req.token = token;
      req.user = user;
      next();
    })
    .catch(() => {
      res.status(401).send();
    });
};

module.exports = {
  authenticate
};
