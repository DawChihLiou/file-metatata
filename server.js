'use strict';

const express = require('express');
const url = require('url');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/app`));

/**
 * Landing page 
 */
app.get('/', (req, res) => {
    res.render(`${__dirname}/index.html`);
});

app.listen(port, () => {
   console.log(`Server is Listening to port ${port}`); 
});