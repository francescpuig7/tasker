
define([
    'global',
    'api'
], function(G, Api){
    var Profile = {}
    Profile.init = function(P){

        G.on('view:profile:update', function(userOrigin, username, email, password){
            userOrigin.save({name:username, email:email, password:password},{
                success:function(model){
                    alert("Dades actualitzades");
                },
                error:function(model){
                    alert("Error al actualitzar les dades");
                }
            });
        })
    }
    return Profile;
})
