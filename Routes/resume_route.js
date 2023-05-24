const { Router } = require("express");
const { uploadResume } = require("../Controllers/Resume_controller");
const { uploader } = require("../config/resume_config");

const router = Router();

router.post(
    "/",
    uploader.single("image"),
    uploadResume
  );


  module.exports = router;