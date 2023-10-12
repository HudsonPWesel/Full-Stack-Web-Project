const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./src/routes/main');
// const adminRoutes = require('./src/');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(mainRoutes);
// app.use(adminRoutes);

app.listen(3000);
