const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/book", require("./routes/book"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Running on PORT: ${PORT}`));
