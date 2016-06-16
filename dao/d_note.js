/**
 * Created by Sergi on 14/06/2016.
 */

module.exports = function(app, dao){
    var util = require('../util');
    var db = app.db;
    var P = app.Promise;
    var Note = {};

    Note.create = function(noteData, t){
        return db.Note.create(noteData, util.addTrans(t,{}));
    }


    Note.getNotes = function (noteData, t) {
        return db.User.findAll(util.addTrans(t,{}));
    }
    return Note;
}
