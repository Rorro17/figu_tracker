// db.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:M^#G3YOMdr74@ds139929.mlab.com:39929/figutracker');
var db = mongoose.connection;

 module.exports = db;
