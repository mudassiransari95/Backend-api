const mongoose=require('mongoose')
const connectToDb=async()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/App')
    .then(()=>console.log('connected to Mongodb successfully'))
    .catch(()=>console.log('error in connectin to mongodb'));
}

module.exports=connectToDb