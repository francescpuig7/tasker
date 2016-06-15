/**
 * Created by puig on 13/6/16.
 */
define([
    'global',
    'text!/templates/team/team.html',
    'text!/templates/task/contentTask.html'
], function(G, tl_team, tl_contentTeam){

    var TeamView = G.Backbone.View.extend({
        className : 'container',

        initialize: function(){
            this.template = G._.template(tl_team)
            this.templateTeam = G._.template(tl_contentTeam)
        },

        events: {
            'click #newTeam': 'newTeam',
            'click #cercarUsuaris': 'searchTeam',
            'click #cercaUsuarisEmail': 'searchTeamByEmail'
        },

        newTeam: function(){
            //var tlt= this.templateTeam;
            confirm('Estas segur que vols crear aquest Team?')

            var content= this.$el.find('.listAdd');
            content.find('.glyphicon-trash').remove()
            content.appendTo(this.$el.find('.team').first())
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
