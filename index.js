const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const cors = require("cors");
const resume_router = require('./Routes/resume_route');
// Create Express app
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());


app.use("/upload-resume", resume_router);


// Connect to MongoDB using Mongoose
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Create a Mongoose Schema




// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});