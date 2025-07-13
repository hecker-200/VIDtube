import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({path : './.env'});

const port = process.env.PORT;


connectDB()
.then( () => {

  app.on("error",(error)=> {

    console.log(('err',error));
    throw error;
    
  })

  app.listen(port || 8000, () => {
    console.log(`Server is listening at at port ${port}`);
    
  })
})
.catch((err) => {

  console.log("mongo db connection failed",err);
  
})