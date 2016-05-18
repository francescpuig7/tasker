/**
 * Created by Sergi on 04/05/2016.
 */
define([
    'global',
    'text!/templates/task/tl_task.html'
], function(G, tl_task){

    var TaskView = G.Backbone.View.extend({
        className : 'container',

        initialize: function(){
            this.template = G._.template(tl_task)
        },

        events: {
            'click #btn-newTask': 'newTask'
        },

        newTask: function(){
            var data = {
                title: this.$('[name=taskName]').val(),
                description: this.$('[name=taskDesc]').val()
            }
            G.trigger('view:tasks:new', data)
        },

        render: function(){
            this.$el.html(this.template(this))
            return this
        }

    });
    return TaskView
});
