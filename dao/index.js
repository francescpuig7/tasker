/**
 * New node file
 */

module.exports = function (app) {
  var dao = {};

  dao.User = require('./d_user')(app, dao);
  dao.Order = require('./d_order')(app, dao);
  //dao.Task = require('./d_task')(app, dao);

  return dao;
}