const path = require('path');
const storage = path.resolve(__dirname, '../db/chinook.db');
const { Sequelize } = require('sequelize');
const ArtistModel = require('./artist');
const AlbumModel = require('./album');

// init ORM 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage
});


// establish models
const Artist = ArtistModel(sequelize, Sequelize);
const Album = AlbumModel(sequelize, Sequelize);


// setup relationships
Artist.hasMany(Album);
Album.belongsTo(Artist, { foreignKey: 'ArtistId' });


// make active models available to services
module.exports = {
    conn: sequelize,
    Artist,
    Album
};