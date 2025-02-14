// const mongoose = require('mongoose');
const express = require('express')
// const Product= require('./models/product.model.js');
// const productRoute=require("./Routes/product.routes.js");
const cors = require('cors');
const app = express()
const fs = require('fs');
//Middleware
app.use(express.json());
app.use(cors())

//Routes
// app.use("/api/products",productRoute);

app.get('/api', function (req, res) {
  res.send('Hello World')
})

app.get('/api/movies', function (req, res) {
  fs.readFile('movies.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading movies file');
    } else {
      res.json(JSON.parse(data)); // Send the JSON data as a response
    }
  });
});

app.listen(5000, function () {
  console.log('Server is running on port 5000');
});

//database connection
// mongoose.connect('mongodb://127.0.0.1:27017/hello_haba_june17')
// .then(() => {
//     console.log('Connected to database Test1!');})