const express = require('express');
const {authAdmin,authUser} = require('./middlewares/auth')
const app = express();

app.use('/admin',authAdmin);

app.get('/admin/getAllUsers', (req, res) => {
  //throw new Error("error in fetching the data");
  res.send('Fetched all the users');
});

app.get('/user/getUserData',authUser,(req,res,next)=>{
  res.send("Feteched user Data");
})

app.get('/user/login',(req,res,next)=>{
  console.log("User is trying to login...");
  res.send("User logged in");
})

app.get('/admin/deleteUser', (req, res) => {
  res.send('Deleted a User');
});

app.use((req, res, next) => {
  console.log('Hey there ');
  next();
});

app.get('/user2', (req, res, next) => {
  res.send('Hello World');
});

app.get('/user', (req, res, next) => {
  //console.log(req.params);
  res.send('Got the user Data');
  //next();
});

app.get('/user', (req, res) => {
  console.log(req.params);
  res.send('Got the user Data');
});

app.post('/user', (req, res) => {
  //Save the user data into DB.
  res.send('Successfully saved the user Data in DB.');
});

app.delete('/user', (req, res) => {
  //Delete the user from DB
  res.send('Successfully Deleted the user from DB.');
});

// app.use('/test', (req, res) => {
//   res.send('Hello api!!');
// });

app.use('/',(err,req,res,next)=>{
  if(err)
  {
    //Log your error
    res.status(500).send("Something Went Wrong");
  }
})

app.listen(7777, () => {
  console.log('Finally Server is successfully listening at port 7777');
});
