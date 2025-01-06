const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/ecomproject")
.then(()=>{
    console.log('connect')
})
.catch((err)=>{
   console.log(err) 
}) 
module.exports = mongoose.connection;