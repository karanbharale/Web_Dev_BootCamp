// Import express framework
const express = require("express");
// Create Express application
const app = express();



// Load environment variables from .env file
require('dotenv').config();
// Define port
const PORT = process.env.PORT || 8000;


// Middleware to parse JSON request body
app.use(express.json());


// Import routes for blogging API 
const blog = require('./routes/blog');
// Mount the blogging API routes
app.use('/api/v1', blog);


// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})


// Connect to database
const dbConnect = require('./config/database');
dbConnect();


// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is HOME PAGE</h1>`)
});

// http://localhost:4000/api/v1/dummyroute  => your working url how its look