/**
 * Created by Sergi on 14/06/2016.
 */
define(['backbone'],
    function(Backbone){
        var NoteModel = Backbone.Model.extend({
            url: "/api/users/self/note"
        });
        return NoteModel;
    });