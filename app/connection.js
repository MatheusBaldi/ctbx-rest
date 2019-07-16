const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fullstack:fullstack@cluster-ke4bz.mongodb.net/cotabox-challenge?retryWrites=true&w=majority', {useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('connected', function(){
    console.log('Connected to DB');
});

connection.on('error', function(err){
    console.log('DB connection error', err);
});

module.exports = connection;