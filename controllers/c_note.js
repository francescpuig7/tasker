/**
 * Created by Sergi on 14/06/2016.
 */
module.exports = function(app){
    var P = app.Promise;
    var db = app.db;

    var util = require('../util');
    var dao = require('../dao')(app);

    return{

        create: function (req, res) {
            db.sequelize.transaction(function(t){
                return db.Note.create(req.body, {transaction: t})
            }).then(util.jsonResponse.bind(util, res))
                .catch(util.resendError.bind(util, res))
                .done();
        },

        /*create: function(req, res){
            db.sequelize.transaction(function(t){
                return dao.User.getByUsername(req.user.username, t)
                    .then(function(user){
                        if (!user) util.sendError(500, util.Error.ERR_ENTITY_NOT_FOUND, "User from token does not exist");
                        else return dao.Note.create(req.body, user, t);
                    })
            })
                .then(util.jsonResponse.bind(util, res))
                .catch(util.resendError.bind(util, res))
                .done();
        },*/

        getNotes: function(req, res){
            db.sequelize.transaction(function(t){
                return db.Note.findAll({transaction: t})
            }).then(util.jsonResponse.bind(util,res))
                .catch(util.resendError.bind(util,res))
                .done()
        },
    }
}
