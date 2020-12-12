const { Album, Artist } = require('../models/conn');


class AlbumService {

    findOne = (AlbumId) => {
        const where = { AlbumId };
        return this.find(where, true);
    };

    findAll = () => {
        return this.find();
    };

    find = (where = {}, single = false) => {
        const attributes = [
            'AlbumId',
            'Title'
        ];

        const filter = {
            attributes,
            where,
            include: [{
                model: Artist,
                attributes: ['Name']
            }]
        };

        const f = single ? Album.findOne(filter) : Album.findAll(filter);

        return f.then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
}


module.exports = AlbumService;