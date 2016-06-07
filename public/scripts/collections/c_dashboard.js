/**
 * Created by puig on 28/5/16.
 */
define([
    'backbone',
    'models/m_task'
], function(Backbone, TaskModel){
    var TaskCollection = Backbone.Collection.extend({
        model: TaskModel,
        url: "/api/users/self/task"
    });

    dash = new TaskCollection();
    dash.add({ 'nombre': 'Anthony Machine' });
    dash.add({ 'nombre': 'Miguel Campoviejo' });
    console.log( dash.toJSON() );

    return TaskCollection;
});