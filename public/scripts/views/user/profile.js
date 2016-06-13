/**
 * Created by Sergi on 27/05/2016.
 */
define([
    'global',
    'text!/templates/user/profile.html',
    'text!/templates/user/userProfile.html',
    'text!/templates/user/configProfile.html'
], function(G, t_profile, t_userProfile, t_configProfile){


    var Profile = G.Backbone.View.extend({
        template: G._.template(t_profile),
        temp: G._.template(t_userProfile),
        tempConfigProfile: G._.template(t_configProfile),
        className: 'container',

        initialize: function(){
            this.templage = G._.template(t_profile);
        },

        events:{
            'click #btn_perfil': 'loadPerfil',
            'click #btn_config': 'loadGeneralConfig',
            'click .btn-success': 'saveChanges'
        },

        loadPerfil: function(){
            //posa al panell dret l'informació del perfil
            var $rightPanel = this.$el.find('#contingutPerfil');
            //$rightPanel.html(t_userProfile);
            $rightPanel.html(this.temp({user: this.userData.name, email: this.userData.email}));
        },

        loadGeneralConfig: function(){
            //Carregar generalConfiguration
            //es carrega al mateix div (substitució)
            var $rightPanel = this.$el.find('#contingutPerfil');
            $rightPanel.html(this.tempConfigProfile);//.then({InputUserName: userData.username, InputEmail:userData.email});
            this.$el.find('#InputUserName').val(this.userData.username);
            this.$el.find('#InputEmail').val(this.userData.email);
        },

        saveChanges: function(){
            G.trigger('view:profile:update',this.userData, this.$('#InputUserName').val(), this.$('#InputEmail').val(), this.$('#InputPassword').val())
        },

        render: function(user){
            this.userData = user;
            this.$el.html(this.template()).find('#contingutPerfil').html(this.temp({user: user}));
            return this
        }
    });

    return Profile
});