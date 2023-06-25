const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then((response)=>{
        console.log("database connected successfully....");
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDb;