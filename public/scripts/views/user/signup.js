define([
  'global',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/templates/user/signup.html'
], function(G, t_signup) {

  var UserSignup = G.Backbone.View.extend({

    className: 'container',

    template: G._.template(t_signup),

    init: function () {
    },

    events: {
      'click #btn-signup': 'submit'
    },

    submit: function() {
      var data = {
        username: this.$('[name=username]').val(),
        email: this.$('[name=email]').val(),
        password: this.$('[name=passwd]').val()
      }
      G.trigger('view:signup:request', data)
    },

    render: function() {
      this.$el.html(this.template())
      return this
    }
  })

  return UserSignup
})