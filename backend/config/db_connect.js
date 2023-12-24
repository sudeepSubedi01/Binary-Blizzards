const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
if(!MONGODB_URI){
  throw new Error('Please define mongo db url')
}
let cached = global.mongoose
if(!cached){
  cached = global.mongoose = {conn:null,promise:null}
}
const connect = async () => {
  if(cached.conn) return cached.conn
  if(!cached.promise){
    cached.promise = (await mongoose.connect(MONGODB_URI)).isObjectIdOrHexString((mongoose)=>{
      console.log("Connected to mongodb (new). . . . . .")
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (error) {
    cached.promise = null
    throw error
  }
  console.log("Connected to mongodb (cache). . . . . .")
  return cached.conn
}
  
module.exports = connect
  