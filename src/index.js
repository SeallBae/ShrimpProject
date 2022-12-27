//import library
const express = require('express');
const http = require('http');
const app = express();
const port = 4000;

const morgan = require('morgan');

const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const methodOverride = require('method-override');

//import db
const db = require('./config/db');
//connect db
db.connect();

//HTTP logger
// app.use(morgan('combined'));

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template engine
var hbs = handlebars.create({defaultLayout: 'main', extname: '.hbs'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})