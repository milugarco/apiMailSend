const express = require('express');
const bodyParser = require('body-parser');
const port = 3030;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
const routes = require('./src/routes/router');

app.use('/api', routes);

app.listen(port);

