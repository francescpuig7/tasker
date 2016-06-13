define([
  'presenters/ui',
  'presenters/routes',
  'presenters/login',
  'presenters/orders',
  'presenters/task',
  'presenters/profile'],
  function(Ui, Router, Login, Orders, Task, Profile) {

  var Presenters = {}

  Presenters.Ui = Ui
  Presenters.Router = Router

  Presenters.init = function() {
    Ui.init()
    Login.init(Presenters)
    Router.init(Presenters)
    Orders.init(Presenters)
    Task.init(Presenters)
    //Profile.init(Presenters)
  }

  return Presenters
})