const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  feature: {type: String},
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  projectURL: { type: String },
  androidURL: { type: String },
  iosURL : { type: String },
  githubURL: { type: String },
  });

module.exports = mongoose.model('Project', projectSchema);
