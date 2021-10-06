const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const bookRoute = require('./routes/books');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected"))
    .catch((err) =>console.log(err));

app.use("/api/books",bookRoute)

app.listen("5000", () => {
    console.log("Backend is running.");
});

