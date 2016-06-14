/**
 * Created by Sergi on 11/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define('Task',{
        name : DataTypes.STRING(512),
        description: DataTypes.STRING(2048),
        taskState: DataTypes.STRING(25)
    }, {
        classMethods : {
            associate : function(models){
                Task.belongsTo(models.User,{as: 'OwnerUser', through:'OwnedTask', foreignKey:'OwnerUserId'})
                Task.belongsTo(models.User,{as: 'AssignedUser', through:'AssignedTask', foreignKey:'AssignedUserId'})
            }
        }
    });
    return Task;
};

