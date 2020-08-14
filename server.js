const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
//import connectdb in server.js
const connectDB = require('./DB/Connection');
connectDB();


//returns json data
app.use(express.json({ extended: false }));

//this is connection with the Api-> User.js
app.use('/api/userModel', require('./Model/User'));

//checks if port is free or use 3000
const Port = process.env.Port || 3000;

//Middleware
app.use(bodyParser.json());

//write in terminal node server.js and it will show if server started or no using console.log
app.listen(Port, () => console.log('Server started'));
