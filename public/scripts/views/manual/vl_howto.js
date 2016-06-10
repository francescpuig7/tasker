/**
 * Created by puig on 10/6/16.
 */
define([
    'global',
    'text!/templates/manual/howto.html'
], function(G, tl_howTo){
    var  HowTo = G.Backbone.View.extend({
        template: G._.template(tl_howTo),

        className:'container',

        initialize:function(){
            this.template = G._.template(tl_howTo);
        },

        events:{
        },

        render: function(){
            this.$el.html(this.template())
            return this
        }
    });
    return HowTo
});