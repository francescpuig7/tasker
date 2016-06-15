/**
 * Created by Sergi on 15/06/2016.
 */
module.exports = function(app){
    var P = app.Promise;
    var db = app.db;

    var util = require('../util');
    var dao = require('../dao')(app);

    return{
        create : function(req, res){
            db.sequelize.transaction(function(t){
                return dao.User.getByUsername(req.user.username, t)
                    .then(function (user){
                        if(!user) util.sendError(res, 500, util.Error.ERR_ENTITY_NOT_FOUND, "User from token does not exist");
                        else return dao.Team.create(req.body, user, t);
                    })
            })
                .then(util.jsonResponse.bind(req, res))
                .catch(util.resendError.bind(util, res))
                .done();
        }
    }
}
