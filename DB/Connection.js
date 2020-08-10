const mongoose = require('mongoose');

const URI = "mongodb+srv://mongouser:Jesus@1003@cluster0.r6lsz.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;

