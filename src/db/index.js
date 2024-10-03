import mongoose from "mongoose";
import { DB_NAME } from "../constent.js";



const connectDB = async () => {
    try {
       const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! ${
            connectionInstence.connection.host
        }`)
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit
    }
}

export default connectDB