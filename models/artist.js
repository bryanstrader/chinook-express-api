module.exports = (sequelize, type) => {
	return sequelize.define('artist', {
		ArtistId: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Name: type.STRING,
	}, {
		tableName: 'artists'
	})
};