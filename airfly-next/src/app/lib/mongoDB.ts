import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

const connection = async () => {
    try {
        
if (!mongoUrl) {
    throw new Error("Enviroment variable in not defined");
}

mongoose.connect(mongoUrl);

console.log("DB is connected")
    } catch (error) {
     console.log(error)   
    }
}

export default connection