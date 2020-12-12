const { Artist } = require('../models/conn');


class ArtistService {

    findOne = (ArtistId) => {
        const where = { ArtistId };
        return this.find(where, true);
    };

    findAll = () => {
        return this.find();
    };

    find = (where = {}, single = false) => {
        const attributes = [
            'ArtistId',
            'Name'
        ];

        const filter = {
            attributes,
            where
        };

        const f = single ? Artist.findOne(filter) : Artist.findAll(filter);

        return f.then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
}


module.exports = ArtistService;