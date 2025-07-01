const express = require('express');
const app = express();

app.get('/user/:userid/:name', (req, res) => {
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

app.listen(7777, () => {
  console.log('Finally Server is successfully listening at port 7777');
});
