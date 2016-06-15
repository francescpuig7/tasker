/**
 * Created by Sergi on 14/06/2016.
 */
module.exports = function(sequelize, DataTypes){
    var Note = sequelize.define('Note',{
        name: DataTypes.STRING(512),
        description: DataTypes.STRING(4096)
    },{
        classMethods:{
            associate: function(models){
               // Note.belongsTo(models.User)
            }
        }
    });
    return Note;
};