const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema({
  text: String,
  sentiment: String,
});

module.exports = mongoose.model("Text", textSchema);
