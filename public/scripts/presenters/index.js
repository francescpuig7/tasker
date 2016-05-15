define([
  'presenters/ui',
  'presenters/routes',
  'presenters/login',
  'presenters/orders',
  'presenters/task'],
  function(Ui, Router, Login, Orders, Task) {

  var Presenters = {}

  Presenters.Ui = Ui
  Presenters.Router = Router

  Presenters.init = function() {
    Ui.init()
    Login.init(Presenters)
    Router.init(Presenters)
    Orders.init(Presenters)
    Task.init(Presenters)
  }

  return Presenters
})