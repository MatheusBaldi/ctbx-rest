  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const personSchema = new Schema({
    name: {
      first: String,
      last: String
    },
    participation: Number
  });

  const Person = mongoose.model('Person', personSchema);

  module.exports.Person = Person;