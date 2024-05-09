require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use('/v1', userRoutes)
mongoose
.connect(process.env.MONGO_URI)
.then (()=>{console.log("database connected")
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
})
.catch((e) => {
    console.error("Error Connecting to Database", e);
  });