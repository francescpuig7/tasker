/**
 * Created by puig on 15/5/16.
 */
define(['backbone'],
    function(Backbone){
        var TaskModel = Backbone.Model.extend({
            urlRoot: "/api/users"
        });
        // Return the model for the module
        return TaskModel;
    });