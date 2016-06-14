/**
 * Created by puig on 13/6/16.
 */
define([
    'global',
    'text!/templates/team/team.html'
], function(G, tl_team){

    var TeamView = G.Backbone.View.extend({
        className : 'container',

        initialize: function(){
            this.template = G._.template(tl_team)
        },

        events: {
            'click #newTeam': 'newTeam'
        },

        newTeam: function(){
            this.$el.find('#name').append(this.userData.username)
            //G.trigger('view:team:update',this.userData, this.userTasks)
        },

        render: function(usuari){
            this.userData= usuari;
            this.userTasks= this.collection;

            var _t= this.collection.get(1)
            var _task= _t.get("name")

            this.$el.html(this.template({team: this.collection, tasca: _task}));

            G.trigger('view:teams:show', this.collection, this.$el)


            return this
        }

    });
    return TeamView
});
