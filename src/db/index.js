import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv"

dotenv.config();



const connectDB = async () => {

  try {
      const connectioninstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);


      console.log(`MongoDB connected!! connection host ${connectioninstance.connection.host}`);


      
  } catch (error) {
    console.error("could not connect to db",error)
    process.exit(1);
  }
}

export default connectDB