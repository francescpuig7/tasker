/**
 * Created by Sergi on 11/05/2016.
 */
module.exports = function(app, dao){
    var util = require('../util');
    var db = app.db;
    var P = app.promise;
    var Task = {};

    Task.getById = function (id, t){
        return db.Task.find(util.addTrans(t, {where: {id: id}}));
    }

    Task.create = function(task_data, user, t){
        return db.Task.create(task_data, util.addTrans(t,{}));
    }
    return Task;
}
