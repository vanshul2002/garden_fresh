const express = require('express');
  const app = express();
  const mongoose = require('mongoose');
  const bodyParser = require("body-parser");
 
  app.use(bodyParser.urlencoded({extended: true}));
  const cors = require('cors');
  mongoose.connect("mongodb://127.0.0.1:27017/GardenFesh", {useNewUrlParser: true});
  const userSchema = new mongoose.Schema({
    Username: String,
    email: String,
  })
  app.post("/login",cors(), async(req, res) => {
    const user = req.body
    console.log(user)
    res.send(user)
  })
  app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
  })