define([
  'presenters/ui',
  'presenters/routes',
  'presenters/login',
  'presenters/orders',
  'presenters/task',
  'presenters/profile',
  'presenters/team',
  'presenters/assignation'],
  function(Ui, Router, Login, Orders, Task, Profile, Team, Assignation) {

  var Presenters = {}

  Presenters.Ui = Ui
  Presenters.Router = Router

  Presenters.init = function() {
    Ui.init()
    Login.init(Presenters)
    Router.init(Presenters)
    Orders.init(Presenters)
    Task.init(Presenters)
    Profile.init(Presenters)
    Team.init(Presenters)
    Assignation.init(Presenters)

  }

  return Presenters
})