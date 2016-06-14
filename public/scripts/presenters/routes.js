define([
  'global',
  'presenters'
], function (G) {

  var Router = {}

  Router.init = function(P) {
    var AppRouter = G.Backbone.Router.extend({
      routes: {
        // Define some URL routes
        '': 'home',
        'signup': 'signup',
        'orders': 'showOrders',
        'dashboard' : 'showDashboard', //afegim la ruta per veure pissarra
        'tasks': 'showTasks',
        'profile': 'showProfile',
        'howto': 'showHowto',
        'team' : 'showTeams',

        // Default
        '*actions': 'defaultAction'
      },

      home: function () {
        P.Ui.showHome()
      },

      signup: function () {
        P.Ui.switchContent('signup')
      },

      showOrders: function () {
        P.Ui.switchContent('orders')
      },

      showDashboard: function(){
        P.Ui.switchContent('dashboard')
      },

      showProfile: function(){
        P.Ui.switchContent('profile', G.localStorage.getItem('user'))
      },

      showTasks: function(){
        P.Ui.switchContent('tasks')
      },

      showHowto: function(){
        P.Ui.switchContent('howto')
      },

      showTeams: function () {
        P.Ui.switchContent('team', G.localStorage.getItem('user'))
      }
    })

    new AppRouter()

    G.Backbone.history.start()
  }

  return Router

})