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
        tempConfigProfile: G._.template(t_configProfile),
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
            //$rightPanel.html(t_userProfile);
            $rightPanel.html(this.temp({name: userData.username, email: userData.email}));
        },

        loadGeneralConfig: function(){
            //Carregar generalConfiguration
            //es carrega al mateix div (substitució)
            var $rightPanel = this.$el.find('#contingutPerfil');
            $rightPanel.html(this.tempConfigProfile);//.then({InputUserName: userData.username, InputEmail:userData.email});
            this.$el.find('#InputUserName').val(userData.username);
            this.$el.find('#InputEmail').val(userData.email);
        },

        saveChanges: function(){
            //var id = userData.id;
            var user = new m_user({id:userData.id});
            user.fetch({
                success:function(user){
                    user.save({name:this.$el.find('#InputUserName').val(),email:this.$el.find('#InputEmail').val()},{
                        success:function(model){
                            alert("Dades actualitzades");
                        },
                        error:function(model){
                            alert("Error al actualitzar les dades");
                        }
                    });
                }
            })
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