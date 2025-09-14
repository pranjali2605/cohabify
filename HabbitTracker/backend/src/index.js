
import dotenv from 'dotenv'
import dbconnect from './db/index.js';
import { app } from './app.js';
import express from 'express';
   


dotenv.config({
    path:'./env'
})

dbconnect()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Process is running at port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO db connect failed ",error);
})


