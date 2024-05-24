const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//TEXT SCHEMA
const textSchema = new Schema({
  text: String,
  sentiment: Object,
});

module.exports = mongoose.model("Text", textSchema);
