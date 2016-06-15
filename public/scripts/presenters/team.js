/**
 * Created by puig on 14/6/16.
 */
define([
    'global',
    'api'
], function(G, Api){
    var Team = {}
    Team.init = function(P){

        G.on('view:teams:show', function(collectionTasks, selector, Me){
            for(var i=1; i<= collectionTasks.length; i++){
                var _user= collectionTasks.get(i)
                var _userName = _user.get("username")

                if(Me!= _userName){
                    var $root = selector.find(".panel-body")
                    var li = $("<li class='list-group-item'><span/><div class='row-fluid'/></li>");
                    li.find("span").text(_userName)
                    li.appendTo($root.find('.list'))
                }

            }
        })

        G.on('view:usersTeam:show', function(collectionTasks, selector, Me, inputText){

            for(var i=1; i<= collectionTasks.length; i++){
                var _user= collectionTasks.get(i)
                var _userName = _user.get("username")

                if(Me!= _userName){
                    //if(/inputText*/.test(_userName)){
                    if(_userName.indexOf(inputText) !== -1){
                        var $root = selector.find(".panel-body")
                        var li = $("<li class='list-group-item'><span/><div class='row-fluid'/></li>");
                        li.find("span").text(_userName)
                        li.appendTo($root.find('.lista'))
                    }
                }
            }
        })

        G.on('view:emailTeam:show', function(collectionTasks, selector, Me, inputText){
            for(var i=1; i<= collectionTasks.length; i++){
                var _user= collectionTasks.get(i)
                var _userEmail = _user.get("email")

                //selector.find(".panel-body").find('.listb').child().remove()
                if(Me!= _userEmail){
                    if(_userEmail.indexOf(inputText) !== -1){
                        var $root = selector.find(".panel-body")
                        var li = $("<li class='list-group-item'><p/><span class='glyphicon glyphicon-ok' aria-hidden='true'/>  <span class='glyphicon glyphicon-trash' aria-hidden='true'/><div class='row-fluid'/></li>");
                        li.find("p").text(_userEmail)
                        li.appendTo($root.find('.listb'))
                    }
                }
            }

            $('.glyphicon-ok').click(function(){
                $(this).hide();

                var forApp= $(this).closest('li');
                forApp.appendTo($('.listAdd'));
            });

            $('.glyphicon-trash').click(function(){
                $(this).closest('li').remove();
            });
        })

        G.on('view:newTeamsThis:show', function(collectionTasks, selector, Me, inputText){
            for(var i=1; i<= collectionTasks.length; i++){
                var _user= collectionTasks.get(i)
                var _userEmail = _user.get("email")

                //selector.find(".panel-body").find('.listb').child().remove()
                if(Me!= _userEmail){
                    if(_userEmail.indexOf(inputText) !== -1){
                        var $root = selector.find(".panel-body")
                        var li = $("<li class='list-group-item'><p/><span class='glyphicon glyphicon-trash' aria-hidden='true'><div class='row-fluid'/></li>");
                        li.find("p").text(_userEmail)
                        li.appendTo($root.find('.listAdd'))

                    }
                }
            }

            $('.glyphicon-trash').click(function(){
                $(this).closest('li').remove();
            });
        })
    }
    return Team;
})
