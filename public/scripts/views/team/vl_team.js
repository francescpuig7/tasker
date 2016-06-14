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
            'click #newTeam': 'newTeam',
            'click #cercarUsuaris': 'searchTeam',
            'click #cercaUsuarisEmail': 'searchTeamByEmail'
        },

        newTeam: function(){
            this.$el.find('#name').append(this.userData.username)
            //G.trigger('view:team:update',this.userData, this.userTasks)
        },

        searchTeam: function(){
            G.trigger('view:usersTeam:show', this.collection, this.$el, this.userData.username, this.$el.find('#InputUserName').val())
        },

        searchTeamByEmail: function(){
            G.trigger('view:emailTeam:show', this.collection, this.$el, this.userData.email, this.$el.find('#InputEmailName').val())
        },

        render: function(usuari){
            this.userData= usuari;
            this.userTasks= this.collection;

            var _t= this.collection.get(1)
            var _task= _t.get("name")

            this.$el.html(this.template({team: this.collection, tasca: _task}));

            G.trigger('view:teams:show', this.collection, this.$el, this.userData.username)


            return this
        }

    });
    return TeamView
});
