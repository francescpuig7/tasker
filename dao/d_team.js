/**
 * Created by Sergi on 15/06/2016.
 */
module.exports = function(app, dao){
    var util = require('../util');
    var db = app.db;
    var P = app.promise;
    var Team = {};

    Team.create = function(team_data, t){
        return db.Team.create(team_data, util.addTrans(t, {}));
    }

    return Team;
}