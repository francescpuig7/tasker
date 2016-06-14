/**
 * Created by Sergi on 14/06/2016.
 */
define([
    'backbone',
    'models/m_note'
], function(Backbone, NoteModel){
    var NoteCollection = Backbone.Collection.extend({
        model: NoteModel,
        url: "/api/users/self/note"
    });
    return NoteCollection;
});