const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");
const sentimentRoutes = require("./routes/sentimentRoutes");

// DOTENV
require("dotenv").config();
require("./config/passport");

const app = express();
connectDB();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(passport.initialize());

// ROUTERS
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/sentiment", sentimentRoutes);

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
