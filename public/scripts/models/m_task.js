/**
<<<<<<< Updated upstream
 * Created by puig on 15/5/16.*/
define(['backbone'],
    function(Backbone){
        var TaskModel = Backbone.Model.extend({
            url: "/api/users/self/task"
        });
        return TaskModel;
    });