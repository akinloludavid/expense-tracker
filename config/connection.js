const mongoose = require('mongoose')

const connectDB = async ()=>{
  try{
    const con = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true, 
      useUnifiedTopology:true,
      useCreateIndex:true, 
      useFindAndModify:true
    })
    console.log(`Database connected to ${con.connection.host}`)
  }
  catch(err){
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB;