const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PondEC = new Schema({
    id: ObjectId,
    PondName: {type: String, maxLength: 50, require: true},
    EC: {type: Number, maxLength: 50},
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('pond_ec', PondEC);