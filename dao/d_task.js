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

    Task.getTasks = function(username, options, t){
        var opt = options || {};
        return dao.User.getByUsername(username, t)
            .then(function(user){
                if(!user) util.throwError(200, util.Error.ERR_ENTITY_NOT_FOUND, 'There is no User with username: ' + username);
                //return P.all([user, user.getOwnedTasks(util.addTrans(t, opt))]);
                return user.getAssignedTask(util.addTrans(t, opt));
            });
           /* .spread(function(user, tasks){
                return user.getAssignedTask(util.addTrans(t,opt));
            })*/
    }

    Task.updateTask = function (task_data, t) {
        return db.Task.findByPrimary(task_data.id, {transaction: t})
            .then(function (task) {
                return task.update(task_data, {transaction: t})
            })
    }

    return Task;
}
