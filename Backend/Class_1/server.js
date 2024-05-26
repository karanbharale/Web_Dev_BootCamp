const express = require('express'); //Accessing the express frame work
const app = express();     //Instanciating the express with app variable

// Use to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
// Specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
    console.log('Server started at port no. 3000');
});

// Routes
app.get('/', (request, response) => {
    response.send('Hello Jee, yours welcome on this port no. 3000')
});

app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send('Car submitted successfully.')
});

// Establishing the connection between MongoDb and server useing Mongoose
// {Mongoose acts like a connection between database and node.js, 
// basically we can say taht it is ODM Library(Object Data Modeling).}
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDataBase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('Connection Successfull') })
    .catch((error) => { console.log('Received an error') });