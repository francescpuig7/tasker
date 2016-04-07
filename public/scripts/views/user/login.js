define([
  'global',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/templates/user/login.html'
], function(G, t_login) {

  var UserLogin = G.Backbone.View.extend({

    template: G._.template(t_login),

    className: 'container',

    init: function () {
    },

    events: {
      'click #btn-login': 'submit'
    },

    submit: function() {
      G.trigger('view:login:request', this.$('#login-username').val(), this.$('#login-password').val())
    },

    render: function() {
      this.$el.html(this.template())
      return this
    }

  })

  // Our module now returns our view
  return UserLogin
})