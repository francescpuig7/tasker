/**
 * Created by Sergi on 06/06/2016.
 */
define([
    'global',
    'text!/templates/user/userProfile.html'
], function(G, t_userProfile){
   var  UserProfile = G.Backbone.View.extend({
       template: G._.template(t_userProfile),

       className:'container',

       initialize:function(){
           this.template = G._.template(t_userProfile);
       },

       events:{
           'btn_changePassword' : 'changePassword'
       },

       btn_changePassword:function(){

       }
   });
    return UserProfile
});