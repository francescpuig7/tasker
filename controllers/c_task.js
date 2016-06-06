/**
 * Created by Sergi on 11/05/2016.
 */
module.exports = function(app) {
    var P = app.Promise;
    var db = app.db;

    var util = require('../util');
    var dao = require('../dao')(app);

    return {
        create: function (req, res) {

            db.sequelize.transaction(function (t) {
                return dao.User.getByUsername(req.user.username, t)
                    .then(function (user){
                        if (!user) util.sendError(res, 500, util.Error.ERR_ENTITY_NOT_FOUND, "User from token does not exist");
                        else return P.all([user, dao.Task.create(req.body, user, t)]);
                    }).spread(function(user, newTask){
                        //tenim usuari i tasca. Fem les relacion
                        return P.all([user, newTask, user.addOwnedTask(newTask, {transaction: t})]);
                    }).spread(function(user, newTask) {
                        return user.addAssignedTask(newTask, {transaction: t});
                    })
            }).then(util.jsonResponse.bind(util, res))
                .catch(util.resendError.bind(util, res))
                .done();
        },

        getById: function (req, res) {
            if (!req.params.id) util.stdErr500(res, "Missing parameter 'id'");
            else
                db.Task.find({where: {id: req.params.id}})
                    .success(util.stdSeqSuccess.bindLeft(res), util.stdSeqError.bindLeft(res))
                    .done();
        }
    }
}