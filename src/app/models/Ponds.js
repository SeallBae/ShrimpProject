const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Pond = new Schema({
  id: ObjectId,
  PondName: {type: String, maxLength: 50, require: true},
  Type: {type: String, maxLength: 50, require: true},
  Population: {type: Number, maxLength: 50, require: true},
  Area: {type: Number, maxLength: 50, require: true},
  Depth: {type: Number, maxLength: 50, require: true},
  Watertype: {type: String, maxLength: 50, require: true},
  Volume: {type: Number, maxLength: 50, require: true},
  UpperECLimit: {type: Number, maxLength: 50, require: true},
  UnderECLimit: {type: Number, maxLength: 50, require: true},
  slug: {type: String, slug: 'PondName', unique: true},
}, {
  timestamps: true,
});
module.exports = mongoose.model('pond', Pond);