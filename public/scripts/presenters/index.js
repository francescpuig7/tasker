define([
  'presenters/ui',
  'presenters/routes',
  'presenters/login',
  'presenters/orders',
  'presenters/dashboard'],
  function(Ui, Router, Login, Orders, Dashboard) {

  var Presenters = {}

  Presenters.Ui = Ui
  Presenters.Router = Router

  Presenters.init = function() {
    Ui.init()
    Login.init(Presenters)
    Router.init(Presenters)
    Orders.init(Presenters)
    Dashboard.init(Presenters)
  }

  return Presenters
})