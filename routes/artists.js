const express = require('express');
const router = express.Router();

const ArtistService = require('../services/artistService');
const artistService = new ArtistService();

router.get(`/`, (req, res) => {
    return artistService.findAll().then((result) => res.send(result));
});

router.get(`/:id`, (req, res) => {
    return artistService.findOne(req.params.id).then((result) => res.send(result));
});

module.exports = router;