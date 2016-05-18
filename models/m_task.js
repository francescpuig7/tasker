/**
 * Created by Sergi on 11/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var Task = sequelize.define('Task',{
        name : DataTypes.STRING(512),
        description: DataTypes.STRING(2048)
    }, {
        cassMethods : {
            associate : function(models){
                Task.belongsTo(models.User)
            }
        }
    });
    return Task;
};

