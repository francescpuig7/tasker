/**
 * Created by puig on 14/6/16.
 */
define([
    'global',
    'api'
], function(G, Api){
    var Team = {}
    Team.init = function(P){

        G.on('view:teams:show', function(collectionTasks, selector){
            for(var i=1; i<= collectionTasks.length; i++){
                var _task= collectionTasks.get(i)
                var _taskName = _task.get("name")

                var $root = selector.find(".panel-body")
                var li = $("<li class='list-group-item'><span/><div class='row-fluid'/></li>");
                li.find("span").text(_taskName)
                li.appendTo($root.find('.list'))
            }
        })
    }
    return Team;
})
