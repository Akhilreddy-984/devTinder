const express = require('express');
const { authAdmin, authUser } = require('./middlewares/auth');
const connectToDb = require('./config/database');
const User = require('./model/User');
const app = express();


app.use(express.json());

app.post('/signup', async (req, res) => {
  const userObj = req.body;
  console.log(userObj);
  // const userObj = {
  //   firstName: "Sachin",
  //   lastName: "Tendulkar",
  //   email: "Sachin.10@gmail.com",
  //   age: 52
  // }
  //   Creating a new instance of the User model
  const user = new User(userObj);

  try {
    await user.save();
    res.send('Success signing up!!');
  } catch (error) {
    res.status(400).send('Error occured ', error.message);
  }
});

//get user by email
app.get('/user', async (req, res) => {
  const emailId = req.body.email;
  try {
    const user = await User.findOne({ email: emailId });
    console.log(user);

    if (!user) {
      res.send('No users in the DB');
    }
    res.send(user);
  } catch (err) {
    console.log('Something went wrong ', err.message);
  }
});

//Feed API - GET /feed - get all the users from the database
app.get('/feed', async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length == 0) {
      res.send('No users in the DB');
    }
    res.send(users);
  } catch (err) {
    console.log('Something went wrong ', err.message);
  }
});

// Delete a user from the database
app.delete('/user', async (req, res) => {
  const id = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send('user deleted successfully');
  } catch (error) {
    res.status(400).send('Something went wrong', error.message);
  }
});


//update data of the user
app.patch('/user', async (req, res) => {
  try {
    const id = req.body.userId;
    const user = await User.findByIdAndUpdate(
      id,
      req.body,
      {returnDocument :'before'}
    );
    console.log(user);
    res.send('Document Updated..');
  } catch (error) {
    res.status(400).send('Something went wrong', error.message);
  }
});

connectToDb()
  .then(() => {
    console.log('Connected to the DB');
    app.listen(7777, () => {
      console.log('Finally Server is successfully listening at port 7777');
    });
  })
  .catch((error) => {
    console.log('Something went wrong ', error.message);
  });
