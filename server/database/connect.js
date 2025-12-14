import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({path: "./config.env"})

async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb connected successfully!")
    }catch(err){
        console.log("Connection failed ", err);
    }
}

connect();