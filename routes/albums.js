const express = require('express');
const router = express.Router();

const AlbumService = require('../services/albumService');
const albumService = new AlbumService();

router.get(`/`, (req, res) => {
    return albumService.findAll().then((result) => res.send(result));
});

router.get(`/:id`, (req, res) => {
    return albumService.findOne(req.params.id).then((result) => res.send(result));
});

module.exports = router;