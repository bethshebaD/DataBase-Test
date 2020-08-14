const mongoose = require('mongoose');
require("dotenv").config();


const connectDB = async () => {
  await mongoose.connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;

