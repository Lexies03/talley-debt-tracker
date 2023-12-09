const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    username: String,
    email: String,
    password: String,
    userType: { type: String, default: "user" },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;

