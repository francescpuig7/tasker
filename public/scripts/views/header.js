define([
  'global',
  // Using the Require.js text! plugin, we load raw text
  // which will be used as our views primary template
  'text!/templates/header.html'
], function(G, t_header) {

  var userData = {}

  var Header = G.Backbone.View.extend({

    initialize: function () {
      this.template = G._.template(t_header)
      G.on('localstorage:set:user', this.setUserData.bind(this))
    },

    render: function() {
      this.$el.html(this.template({user: userData}))
      return this
    },

    setUserData: function(user) {
      userData = user
      this.render()
    }

  })
  // Our module now returns our view
  return Header;
})