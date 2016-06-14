/**
 * Created by Sergi on 14/06/2016.
 */
define([
    'global', 'text!/templates/note/note.html'
], function(G, tl_note){
    var NoteView = G.Backbone.View.extend({
        className: 'container',

        initialize: function(){
            this.template = G._.template(tl_note)
        },

        render: function(){
            this.$el.html(this.template(this))
            return this
        }
    });
    return NoteView
});
