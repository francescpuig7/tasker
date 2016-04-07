define([
  'presenters/ui',
  'presenters/routes',
  'presenters/login'],
  function(Ui, Router, Login) {

  var Presenters = {}

  Presenters.Ui = Ui
  Presenters.Router = Router

  Presenters.init = function() {
    Ui.init()
    Login.init(Presenters)
    Router.init(Presenters)
  }

  return Presenters
})