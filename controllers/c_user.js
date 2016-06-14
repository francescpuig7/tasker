/**
 * New node file
 */


/*
 * GET users listing.
 */

module.exports = function (app) {

  var db = app.db;
  var secret = app.secret;
  var P = app.Promise;

  var util = require('../util');
  var dao = require('../dao')(app);
  var bcrypt = require('bcrypt-nodejs');
  var jwt = require('jsonwebtoken');

  return {
    login: function (req, res) {
      util.checkParams(req.body, ['username', 'password']);

      dao.User.checkPassword(req.body.username, req.body.password)
        .then(function (user) {
          var token = jwt.sign({username: user.username}, secret);
          util.jsonResponse(res, {jwt: token, username: user.username, email: user.email});
        })
        .catch(util.resendError.bind(util, res))
        .done();
    },

    create: function (req, res) {
      util.checkParams(req.body, ['email', 'username', 'password']);

      var attribs = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      }

      db.sequelize.transaction(function (t) {
        return P.all([
          dao.User.getByEmail(req.body.email, t),
          dao.User.getByUsername(req.body.username, t)
        ])
          .spread(function (s1, s2) {
            if (!s1 && !s2) {
              return dao.User.create(attribs, t);
            } else if (s1) {
              util.throwError(400, util.Error.ERR_ENTITY_NOT_FOUND, "Already exist a User with email = " + req.body.email);
            } else {
              util.throwError(400, util.Error.ERR_ENTITY_EXISTS, "Already exist a User with username = " + req.body.username);
            }
          })
      }).then(util.jsonResponse.bind(util, res))
        .catch(util.resendError.bind(util, res))
        .done();
    },

    updateUser: function(req, res){
        util.checkParams(req.body, ['username', 'email', 'password']);
        dao.User.updateUser(req.body, t)
            .then(util.jsonResponse.bind(util, res))
            .catch(util.resendError.bind(util, res))
      /*db.sequelize.transaction(function(t){
        return dao.User.getByEmail(req.body.email, t)
            .then(function (user){
                if(user){
                    dao.User.updateUser(req.body, t)
                }
            })
      }).then(util.jsonResponse.bind(util, res))
        .catch(util.resendError.bind(util, res))
        .done();*/
    },

      getUsers: function (req, res) {
          db.sequelize.transaction(function(t){
              return db.User.findAll({transaction: t})
          }).then(util.jsonResponse.bind(util, res))
            .catch(util.resendError.bind(util, res))
            .done();
      },

      getTasks: function(req, res){
          dao.Task.getTasks(req.user.username, {})
              .then(util.jsonResponse.bind(util,res))
              .catch(util.resendError.bind(util, res))
              .done();
      },
  }
}
