/**
 * New node file
 */

module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
		name : DataTypes.STRING(255),
		email : DataTypes.STRING(255),
		username : DataTypes.STRING(45),
		password : DataTypes.STRING(100),
	}, {
		classMethods : {
			associate : function(models) {
				User.hasMany(models.Order)
				User.hasMany(models.Task, {as : 'OwnedTask', foreignKey:'OwnerUserId'})
				User.hasMany(models.Task, {as : 'AssignedTask', foreignKey:'AssignedUserId'})
				User.hasMany(models.Note)
				//User.hasMany(models.Team, {through: TeamUser})
			}
		}
	});

	return User;
};