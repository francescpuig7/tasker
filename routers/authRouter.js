module.exports = function(app) {

  var express = require('express')
  var jwt = require('express-jwt')({secret: app.secret})
  var Orders = rootRequire('controllers/c_orders')(app)
  var util = rootRequire('util')
  var Tasks = rootRequire('controllers/c_task')(app)

  var router = express.Router()

  router.use(jwt)

  router.get('/api/orders/:id', Orders.getById)
  router.get('/api/users/self/orders', Orders.getOrders, util.sendAuthError)
  router.post('/api/users/self/orders', Orders.create, util.sendAuthError)
  router.post('/api/users/self/task', Tasks.create, util.sendAuthError)
  router.get('/api/users/self/task', Tasks.getTasks, util.sendAuthError)
  return router
}