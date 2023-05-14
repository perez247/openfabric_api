require('dotenv').config();
const express = require('express');
const initAllWebRoutes  = require('./routes/web');
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDB = require('./config/connectDB');

let app = express();

app.use(cors());

// config bady-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config routes
initAllWebRoutes(app);

let port = process.env.port || 9000;

app.listen(port, () => {
    console.log(`App is running on Port: ${port}`)
}); 

