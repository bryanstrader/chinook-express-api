const express = require('express');
const artistRouter = require('./routes/artists');
const albumRouter = require('./routes/albums');
const app = express();

const { 
    SERVER_PORT, 
    API_URL, 
    PUBLIC_DIR 
} = require('./config');


// set the static directory where files can be served from (react app will go here)
app.use(express.static(PUBLIC_DIR));

// set-up the api
app.get(`${API_URL}`, (req, res) => {
    res.send('api base point');
});

app.use(`${API_URL}/artists`, artistRouter);
app.use(`${API_URL}/albums`, albumRouter);

// start express server on port 5000
module.exports = app.listen(SERVER_PORT, () => {
    console.log(`server started on port ${SERVER_PORT}`);
});