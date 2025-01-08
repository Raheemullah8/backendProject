const config = require('config');
const mongoose = require('mongoose');
const dbg = require('debug')("development:mongoose");

const mongoURI = `${config.get('MONGODB_URL')}/ecomproject`;

mongoose.connect(mongoURI)
  .then(() => {
    dbg('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

module.exports = mongoose.connection;


// require('dotenv').config(); // Make sure this is at the top
// const mongoose = require('mongoose');
// const dbg = require('debug')("development:mongoose");

// mongoose.connect(`${process.env.MONGODB_URI}/ecomproject`)
//    .then(() => {
//       dbg('Connected to MongoDB');
//    })
//    .catch((err) => {
//       console.log('Error connecting to MongoDB:', err);
//    });

// module.exports = mongoose.connection;
