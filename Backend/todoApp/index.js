const express = require('express');
const app = express();


// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;


// middleware to parse json request body
app.use(express.json());


// import routes for TODO API
const todoRoutes = require('./routes/todos');
//mount the todo API routes
app.use('/api/v1', todoRoutes);


//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect to database
const dbConnect = require('./config/database');
dbConnect();

// default Route
app.get('/', (req, res) => {
    res.send(`<h1>This is HOMEPAGE of TodoApp</h1>`);
})

// http://localhost:3000/api/v1/deleteTodo/651b1b5d03942c2be9d09125  => your working url how its look