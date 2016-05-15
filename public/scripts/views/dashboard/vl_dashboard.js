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

        events:{ //tots els events
            'click #buttonOpenDashboard': 'openDashboard',
            'click #buttonSaveChanges': 'createTask'
        },

        openDashboard: function(){ //passar aqui lho de la llista
            G.trigger('view:dashboard:create')
        },

        createTask: function(){ //hem capturat el boto de guardar canvis de crear tasca

            function Tasca(a,b){
                titol: this.titol=a;
                descripcio: this.descripcio=b;
            }
            var _tasca= new Tasca(this.$('[name=titol]').val(),this.$('[name=descripcio]'));


            $('#myModal').modal('hide');

            var tit= this.$('[name=titol]').val()
            var inf= this.$('[name=descripcio]').val()

            var pe= "<li>Tasca</li>";
            var back="<p>";
            this.$('#openTask').append(pe,tit,back,inf);
        },

        render: function() {
            this.$el.html(this.template({dashboard: this.collection}))
            return this
        }

    });

    return Dashboard
});