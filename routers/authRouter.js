module.exports = function(app) {

  var express = require('express')
  var jwt = require('express-jwt')({secret: app.secret})
  var Orders = rootRequire('controllers/c_orders')(app)
  var util = rootRequire('util')
  var Tasks = rootRequire('controllers/c_task')(app)
  var User = rootRequire('controllers/c_user') (app)
  var Notes = rootRequire('controllers/c_note') (app)
  var Team = rootRequire('controllers/c_team') (app)

  var router = express.Router()

  router.use(jwt)

  //va a la definició del seu controller
  router.get('/api/orders/:id', Orders.getById)
  router.get('/api/users/self/orders', Orders.getOrders, util.sendAuthError)
  router.post('/api/users/self/orders', Orders.create, util.sendAuthError)
  router.post('/api/users/self/task', Tasks.create, util.sendAuthError)
  router.put('/api/users/self/task', Tasks.updateTask, util.sendAuthError)
  router.get('/api/users/self/task', Tasks.getTasks, util.sendAuthError)
  router.get('/api/users/self/task', Tasks.getTaskByUserId, util.sendAuthError)
  router.get('/api/users/self/task', Tasks.getTasksByUserEmail, util.sendAuthError)
  router.put('/api/users', User.updateUser, util.sendAuthError)
  router.get('/api/users',User.getUsers, util.sendAuthError)
  router.post('/api/users/self/note', Notes.create, util.sendAuthError)
  router.get('/api/users/self/note', Notes.getNotes, util.sendAuthError)
  router.post('/api/users/self/team', Team.create, util.sendAuthError)

  return router
}