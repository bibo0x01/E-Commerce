import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbConnection = mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database Connected`);
    
})


export default dbConnection 