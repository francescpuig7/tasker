module.exports = function (app) {
  var express = require('express')
  var Users = rootRequire('controllers/c_user')(app)

  var router = express.Router()

// User login
  router.post('/api/users/login', Users.login)
// User registration
  router.post('/api/users', Users.create)

  return router;
}