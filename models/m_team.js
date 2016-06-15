/**
 * Created by Sergi on 15/06/2016.
 */
module.exports = function(sequelize, DataTypes){
    var Team = sequelize.define('Team',{
        name: DataTypes.STRING(2048)
    }, {
        classMethods : {
            associate : function(models){
                //Team.hasMany(models.User, {through: TeamUser})
            }
        }
    });
    return Team;
}
