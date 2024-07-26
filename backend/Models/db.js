const mongoose = require('mongoose'); //importing mongoose

const mongo_url = process.env.MONGO_CONNECT_URI;

mongoose.connect(mongo_url)
   .then(() => {
      console.log('MongoDB Connected ;)');
   }).catch((err)=>{
      console.log('MongoDB Connection Error: ', err);
   })