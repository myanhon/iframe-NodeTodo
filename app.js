const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + 'publi'));

app.set('viewengine', 'ejs');

mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }); //Mongoose doesn't close connection
setupController(app);
app.listen(port);

