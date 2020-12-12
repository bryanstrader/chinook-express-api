module.exports = (sequelize, type) => {
	return sequelize.define('album', {
		AlbumId: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
        Title: type.STRING,
        ArtistId: {
			type: type.INTEGER
        }
	}, {
		tableName: 'albums'
	})
};