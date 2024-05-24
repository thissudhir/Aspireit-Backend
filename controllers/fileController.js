const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");

exports.uploadFile = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "File is required" });
  }
  const gridFSBucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: "uploads",
  });
  const uploadStream = gridFSBucket.openUploadStream(file.originalname, {
    contentType: file.mimetype,
  });
  uploadStream.end(file.buffer);
  res.status(201).json({ message: "File uploaded successfully" });
};
