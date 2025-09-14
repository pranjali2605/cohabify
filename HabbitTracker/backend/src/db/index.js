import mongoose from 'mongoose'

const dbconnect=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`/n MongoDB connect !! Host:${connectionInstance.connection.host}`)

    }catch(error){
        console.log("Mongodb connection failed ",error);
        process.exit(1);
    }
}
export default dbconnect;