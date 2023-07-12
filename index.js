require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.API_PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
const routes = require('./src/routes/router');

app.use('/api', routes);

app.listen(port);

