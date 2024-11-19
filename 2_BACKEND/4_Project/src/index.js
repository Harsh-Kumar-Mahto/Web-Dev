// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });

// import express from 'express';
// const app = express();

// This is an iffy function that is executed instantly
// Good practice to use async await as database is far and we need to wait fo response
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)            //this line is used to connect to database
//         app.on("error",(error) => {                //after importing express we can check if there is some error in communication with db after getting successfuly connected
//             console.log("ERROR:",error);
//             throw error;
//         })

//         app.listen(process.env.PORT,() => {       //backend is continuously listening
//             console.log(`App is listening on port ${process.env.PORT}`);

//         })
//     } catch (error) {
//         console.log("ERROR:",error);
//         throw error
//     }
// })()
