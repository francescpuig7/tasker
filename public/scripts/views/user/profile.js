/**
 * Created by Sergi on 27/05/2016.
 */
define([
    'global',
    'text!/templates/user/profile.html',
    'text!/templates/user/userProfile.html',
    'text!/templates/user/configProfile.html'
], function(G, t_profile, t_userProfile, t_configProfile){
    var userData = {}

    var Profile = G.Backbone.View.extend({
        template: G._.template(t_profile),
        temp: G._.template(t_userProfile),
        className: 'container',

        initialize: function(){
            this.templage = G._.template(t_profile);
            userData = G.localStorage.getItem('user')
        },

        events:{
            'click #btn_perfil': 'loadPerfil',
            'click #btn_config': 'loadGeneralConfig',
            'click .btn-success': 'saveChanges'
        },

        loadPerfil: function(){
            //posa al panell dret l'informació del perfil
            var $rightPanel = this.$el.find('#contingutPerfil');
            $rightPanel.html(this.temp({name: userData.username, email: userData.email}));
        },

        loadGeneralConfig: function(){
            //Carregar generalConfiguration
            //es carrega al mateix div (substitució)
            var $rightPanel = this.$el.find('#contingutPerfil');
            $rightPanel.html(t_configProfile);

        },

        saveChanges: function(){
            alert("clickat save")
        },

        setUserData: function(user){
            userData = user
            this.render()
        },

        render: function(){
            this.$el.html(this.template()).find('#contingutPerfil').html(t_userProfile);
            return this
        }
    });

    return Profile
});