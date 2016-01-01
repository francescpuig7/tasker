/**
 * Created by puig on 28/4/16.
 */
define([
    'global',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!/templates/dashboard/dashboard.html'
], function(G, tl_dashboard) {

    //nova pissarra
    var Dashboard = G.Backbone.View.extend({

        className: 'container',

        initialize: function() {
            this.template = G._.template(tl_dashboard)
        },

        events:{
            'click #buttonOpenDashboard': 'openDashboard'
        },

        openDashboard: function(){
            G.trigger('view:dashboard:create')
        },

        render: function() {
            this.$el.html(this.template({dashboard: this.collection}))
            return this
        }

    });

    return Dashboard
});