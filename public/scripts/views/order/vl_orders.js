define([
  'global',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/templates/order/tl_order.html'
], function(G, tl_order) {

  var OrderListView = G.Backbone.View.extend({
    
    className: 'container',

    initialize: function() {
      this.template = G._.template(tl_order)
    },

    events:{
      'click #buttonCreate': 'createOrder'
    },

    createOrder: function(){
      G.trigger('view:orders:create', this.$('#login-username').val(), this.$('#login-password').val())
    },

    render: function() {
      this.$el.html(this.template({orders: this.collection}))
      return this
    }

  });

  return OrderListView
});