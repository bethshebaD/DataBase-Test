const express = require('express');
const app = express();
//import connectdb in server.js
const connectDB = require('./DB/Connection');
connectDB();

app.use(express.json({ extended: false }));
//app.use('/api/userModel', require('./Api/User'));
//checks if port is free or use 3000
const Port = process.env.Port || 3000;


//write in terminal node server.js and it will show if server started or no using console.log
app.listen(Port, () => console.log('Server started'));
