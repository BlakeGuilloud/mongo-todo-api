const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./lib/routes/todo.routes');

const db = process.env.MONGODB_URI || 'mongodb://fbguillo:574Rutledge.@ds011268.mlab.com:11268/heroessandbox';
const port = process.env.PORT || 8100;

mongoose.connect(db);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use('/todos', todoRoutes);

app.listen(port, () => console.log('app listening on port: ', port));
