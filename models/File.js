const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//FILE SCHEMA
const fileSchema = new Schema({
  filename: String,
  contentType: String,
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", fileSchema);
