// Create App
const express = require("express");
const app = express();

// Find Port
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Add middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Connection with database
const db = require("./config/database");
db.connect();

// Connection with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// Activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})