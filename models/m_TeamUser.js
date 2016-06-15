/**
 * Created by Sergi on 15/06/2016.
 */
module.exports = function(sequelize, DataTypes){
    var TeamUser = sequelize.define('TeamUser',{

    },{
        classMethods:{
            associate : function(models){
                TeamUser.belongsTo(models.User)
                TeamUser.belongsTo(models.Team)
            }
        }
    });
    return TeamUser;
};
