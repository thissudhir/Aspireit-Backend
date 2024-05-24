const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const upload = require("../middleware/fileUpload");
const authenticateJWT = require("../middleware/auth");

router.post(
  "/upload",
  authenticateJWT,
  upload.single("file"),
  fileController.uploadFile
);

module.exports = router;
