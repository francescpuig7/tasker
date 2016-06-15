/**
 * Created by puig on 15/6/16.
 */
define([
    'global',
    'text!/templates/assignation/assignation.html',
    'models/m_task'
], function(G, tl_assig, Tasca){
    var  Assignation = G.Backbone.View.extend({
        template: G._.template(tl_assig),

        className:'container',

        initialize:function(){
            this.template = G._.template(tl_assig);
        },

        events:{
            'click #cercaUsuarisEmail': 'searchTeamByEmail'
        },

        searchTeamByEmail: function(){
            G.trigger('view:assignation:show', this.collection, this.$el, this.userData.email, this.$el.find('#InputEmailName').val(), this.taskId, this.task, Tasca)
        },

        render: function(usuari){

            this.userData= usuari;
            this.task= G.localStorage.getItem("task");
            this.taskId= G.localStorage.getItem("taskId")

            this.$el.html(this.template())

            return this
        }
    });
    return Assignation
});