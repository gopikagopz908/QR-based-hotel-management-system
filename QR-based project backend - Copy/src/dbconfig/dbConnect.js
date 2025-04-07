import mongoose from 'mongoose';
const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('DB connected')
    }catch(error){
        console.log(error,"db connection error")
    }
}
export default dbConnect;