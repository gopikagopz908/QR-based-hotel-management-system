import app from './app.js'
import dbConnect from './src/dbconfig/dbConnect.js';

const PORT=process.env.PORT;
 dbConnect();
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)  
    
})
