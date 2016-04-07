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
      }
    })

    new AppRouter()

    G.Backbone.history.start()
  }

  return Router

})