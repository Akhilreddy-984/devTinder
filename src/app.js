const express = require('express');
const {authAdmin,authUser} = require('./middlewares/auth')
const connectToDb = require('./config/database')
const User = require('./model/User');
const app = express();

app.post('/signup',async (req,res)=>{
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    email: "Virat.Kohil@gmail.com",
    age: 38
  }
  const user = new User(userObj);

  try{
    await user.save();
    res.send("Success signing up!!")
  }
  catch(error){
    res.status(400).send("Error occured ", error.message);
  }
  


})




connectToDb().then(()=>{
  console.log("Connected to the DB");
  app.listen(7777, () => {
  console.log('Finally Server is successfully listening at port 7777');
});
}).catch((error)=>{
  console.log("Something went wrong ",error.message);

})


