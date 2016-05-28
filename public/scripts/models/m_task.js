/**
<<<<<<< Updated upstream
 * Created by puig on 15/5/16.
=======
 * Created by Sergi on 05/05/2016.
>>>>>>> Stashed changes
 */
define(['backbone'],
    function(Backbone){
        var TaskModel = Backbone.Model.extend({
            urlRoot: "/api/tasks"
        });
        return TaskModel;
    });
