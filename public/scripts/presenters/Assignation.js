/**
 * Created by puig on 15/6/16.
 */
define([
    'global',
    'api'
], function(G, Api){
    var Assignation = {}
    Assignation.init = function(P){

        G.on('view:assignation:show', function(collectionUsers, selector, Me, inputText, idTask, tasca, thisModel, thisUser){
            for(var i=1; i<= collectionUsers.length; i++){
                var _user= collectionUsers.get(i)
                var _userEmail = _user.get("email")

                //selector.find(".panel-body").find('.listb').child().remove()
                if(Me!= _userEmail){
                    if(_userEmail.indexOf(inputText) !== -1){
                        var $root = selector.find(".row")
                        var li = $("<li class='list-group-item'><p/><a href='#profile'></a><span class='glyphicon glyphicon-send' aria-hidden='true'/><div class='row-fluid'/></li>");
                        li.find("p").text(_userEmail)
                        li.appendTo($root.find('.listUsers'))
                    }
                }
            }

            $('.glyphicon-send').click(function(){
                //alert("modificare "+idTask+" amb "+ $(this).closest('li').find("p").text());
                //var _task = this.collection.get(1);
                var user= $(this).closest('li').find("p").text();
                var usuid= 1;

                for(var i=1; i<= collectionUsers.length; i++){
                    var _u= collectionUsers.get(i)
                    var _uEmail = _u.get("email");
                    var _id= _u.get("id");

                    if(_uEmail == user){
                        usuid= _id;
                    }
                }

                mod = new thisModel(tasca);
                mod.save({AssignedUserId: usuid}, {
                    success: function(model){
                        console.log("Tasca assignada a un altre usuari")
                    },
                    error: function(model, err){
                        console.log("Error a l'assignar una tasca a un altre usuari")
                        alert("No s'ha pogut assignar la tasca")
                    }});

            });
        })
    }

    return Assignation;
})

