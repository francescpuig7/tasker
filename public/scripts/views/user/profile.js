/**
 * Created by Sergi on 27/05/2016.
 */
define([
    'global',
    'text!/templates/user/profile.html',
    'text!/templates/user/userProfile.html'
], function(G, t_profile, t_userProfile){
    var Profile = G.Backbone.View.extend({
        template: G._.template(t_profile),

        className: 'container',

        initialize: function(){
            this.templage = G._.template(t_profile);
        },

        events:{
            'click #btn_perfil': 'loadProfileConfig',
            'click #btn_config': 'loadGeneralConfig'
        },

        loadProfileConfig: function(){
            //Carregar userProfile.html
            var $rightPanel = this.$el.find('#contingutPerfil');
            $rightPanel.html(t_userProfile);
        },

        btn_config: function(){
          //Carregar generalConfiguration
        },

        render: function(){
            this.$el.html(this.template())
            return this
        }
    });

    return Profile
});