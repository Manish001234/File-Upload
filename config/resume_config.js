const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
const storage = new Storage({
    projectId:"file-2e172" ,
    keyFilename:"./firebasefile.json ",
  });

  const bucket = storage.bucket("gs://file-2e172.appspot.com");

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
    },
  });

  module.exports = { storage, bucket, uploader };