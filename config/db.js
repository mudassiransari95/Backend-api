const mongoose=require('mongoose')
require('dotenv').config()
const connectToDb=async()=>{
    mongoose.connect(process.env.MONGO-URL)
    .then(()=>console.log('connected to Mongodb successfully'))
    .catch(()=>console.log('error in connectin to mongodb'));
}

module.exports=connectToDb