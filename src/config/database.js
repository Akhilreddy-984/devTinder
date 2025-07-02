const mongoose = require('mongoose');

const connectToDb = async() => {
  try{
      await mongoose.connect('mongodb+srv://AkhilReddy984:0MK6Paw4CTPpRGjJ@nodecluster.xtxo58c.mongodb.net/devTinder')
  }
  catch(error)
  {
    console.log("Error!");
  }
  
}

module.exports = connectToDb;
