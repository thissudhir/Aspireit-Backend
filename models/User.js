const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
//USER SCHEMA
const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});
//HASHING  PASSWORD
userSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
//COMPARING THE GIVEN PLAIN TEXT PASSWORD WITH HASED PASSWORD IN THE DATABASE
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
