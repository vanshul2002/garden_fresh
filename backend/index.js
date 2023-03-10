const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/GardenFesh", { useNewUrlParser: true });
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
})
const User = new mongoose.model("User", userSchema);
app.post("/login", cors(), async (req, res) => {
  const test = req.body
  console.log(test)
  try{
    const data = await User.findOne({ 'email': test.email });
    console.log("data",data)
    if(data){
      if(data.password === test.password){
        res.send("login succesfull")
      }
      else{
        res.send("wrong password")
      }
    }
    else{
      console.log("user not found")
      res.redirect("http://localhost:3000/signup")
    }



  }
  catch (error) {
    console.log(error);
  }
 

})
app.post("/signup", cors(), async (req, res) => {

  const test = req.body;
  try{
    const data = await User.findOne({ 'email': test.email });
    if(data){
      res.send("User already exits")

    }
    else{
      const user = new User(
        test
      )
      user.save()
      res.send("signup succesfull")
      
      
    }



  }
  catch (error) {
    console.log(error);
  }
  
})
app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
})