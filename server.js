'use strict';

const express = require('express');
const url = require('url');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 8080;

const upload = multer();

app.use(express.static(`${__dirname}/app`));

app.get('/', (req, res) => {
    res.render(`${__dirname}/index.html`);
});

app.post('/api/upload', upload.single('upl'), (req, res) => {
    res.send({size: `${req.file.size} bytes`});
});

app.listen(port, () => {
   console.log(`Server is Listening to port ${port}`); 
});