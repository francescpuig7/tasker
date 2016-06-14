/**
 * Created by Sergi on 14/06/2016.
 */

module.exports = function(app, dao){
    var util = require('../util');
    var db = app.db;
    var P = app.Promise;
    var Note = {};

    Note.create = function(noteData, user, t){
        return db.Note.create(noteData, util.addTrans(t,{}))
            .then(function(note){
                return note.setUser(user, util.addTrans(t, {}))
            });
    }

    Note.getNotes = function(username, options, t){
        var opt = options || {};
        return dao.User.getByUsername(username, t)
            .then(function(user){
                if(!user) util.throwError(400, util.Error.ERR_ENTITY_NOT_FOUND, 'There is no User with username: ' + username);
                return user.getNotes(util.addTrans(t, opt));
            });
    }
    return Note;
}
