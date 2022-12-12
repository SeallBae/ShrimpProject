//import library
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

//HTTP logger
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded());
app.use(express.json());

//Template engine
var hbs = handlebars.create({defaultLayout: 'main', extname: '.hbs'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})