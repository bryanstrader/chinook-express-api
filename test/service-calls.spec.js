const sinon = require('sinon');
const AlbumService = require('../services/albumService');
const albumService = new AlbumService();
const { Album } = require('../models/conn');
const { assert } = require('console');
const { mockAlbum } = require('./mockData');

describe('service calls', () => {
    
    it('should findOne', async () => {
        const stub = sinon.stub(Album, "findOne").returns(
            new Promise((resolve, reject) => {
                resolve(mockAlbum);
            })
        );
        const data = await albumService.findOne(1);
        sinon.assert.match(data, mockAlbum);
        sinon.assert.calledOnce(stub);
    });

    it('should findAll', async () => {
        const stub = sinon.stub(Album, "findAll").returns(
            new Promise((resolve, reject) => {
                resolve([ mockAlbum ]);
            })
        );
        const data = await albumService.findAll();
        sinon.assert.match(data, [mockAlbum]);
        sinon.assert.calledOnce(stub);
    });

});