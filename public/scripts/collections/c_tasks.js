/**
 * Created by Sergi on 28/05/2016.
 */
define([
    'backbone',
    'models/m_task'
], function(Backbone, TaskModel){
    var TaskCollection = Backbone.Collection.extend({
        model : TaskModel,
        url: "/api/users/self/task"
    });
    return TaskCollection;
});