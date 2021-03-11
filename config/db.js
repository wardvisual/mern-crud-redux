const mongoose = require("mongoose");
const { mongoURI } = require("./mongURI.json");

const connectDB = async () => {
  await mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected");
};

module.exports = connectDB;
