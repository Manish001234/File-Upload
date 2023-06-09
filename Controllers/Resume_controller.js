const nodemailer = require("nodemailer");


const uploadResume = async(req, res) =>{
    try {
      if (!req.file) {
        res.status(400).send("Error, could not upload file");
        return;
      }
      // Create new blob in the bucket referencing the file
      const blob = bucket.file(req.file.originalname);
      // Create writable stream and specifying file mimetype
      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });
      blobWriter.on("error", (err) => next(err));
      blobWriter.on("finish", () => {
        // Assembling public URL for accessing the file via HTTP
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          bucket.name
        }/o/${encodeURI(blob.name)}?alt=media`;
        // Return the file name and its public URL
        res
          .status(200)
          .send({ fileName: req.file.originalname, fileLocation: publicUrl });
      });
      // When there is no more data to be consumed from the stream
      blobWriter.end(req.file.buffer);
    } catch (error) {
      console.log(error);
      res.status(400).send(`Error, could not upload file: ${error}`);
      //   return;
    }
  }

  module.exports = {uploadResume}