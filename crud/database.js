const mongoose = require('mongoose');

async function connectToDb(){
    try{
        await mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        console.log("db is connected");
    } catch(error){
        console.log((error),"connection failed");
    }
    
}

module.exports = connectToDb;