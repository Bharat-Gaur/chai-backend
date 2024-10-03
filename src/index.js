import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
const app = express();
dotenv.config({
    path: "./env"
});
import connectDB from './db/index.js'


connectDB();








/*
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("This is App Connecting error: ", error)
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port: ${process.env.PORT} `)
        })
        
    } catch (error) {
        console.error("This is DB Connection error: ", error)
        throw error
    }
})()
    */