/**
 * Created by Sergi on 14/06/2016.
 */
define([
    'global',
    'text!/templates/note/note.html',
    'models/m_note'
], function(G, tl_note, Nota){
    var NoteView = G.Backbone.View.extend({
        className: 'container',

        initialize: function(){
            this.template = G._.template(tl_note)
        },

        events:{ //tots els events
            'click #newNote': 'newNote'
        },

        newNote: function(){
            var content= this.$el.find('#contentNote').val()

            var div= $("<div class='list-group-item list-group-item-warning' style='margin-bottom: 10px;'><span/></div>");
            div.find('span').text(content);
            div.appendTo(this.$el.find('.listNotes'))

            var _note= new Nota({name: "nom", description: content});
            _note.save(null, {success: function(){
                console.log("nota guardada")
            }, error: function(){
                console.log("on save nota error")
            }});

        },

        render: function(){
            this.$el.html(this.template({notes: this.collection}))

            var $divAddNote = this.$el.find('.listNotes').first();

            this.collection.forEach(function(_note){
                var content= _note.get("description");
                var div= $("<div class='list-group-item list-group-item-warning' style='margin-bottom: 10px;'><span/></div>");
                div.find('span').text(content);
                div.appendTo($divAddNote)
            })

            return this
        }
    });
    return NoteView
});
