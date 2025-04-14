import app from './app.js'
import dbConnect from './src/dbconfig/dbConnect.js';
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

 
dbConnect();
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)    
    
})
