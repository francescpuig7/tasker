/**
 * Created by puig on 15/6/16.
 */
define([
    'global',
    'text!/templates/task/editTask.html'
], function(G, tl_eTask){
    var  ETask = G.Backbone.View.extend({
        template: G._.template(tl_eTask),

        className:'container',

        initialize:function(){
            this.template = G._.template(tl_eTask);
        },

        events:{
        },

        render: function(){
            this.$el.html(this.template())
            return this
        }
    });
    return ETask
});