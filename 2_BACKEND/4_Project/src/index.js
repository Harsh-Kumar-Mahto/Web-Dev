import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";

// require('dotenv').config({path: './env'})      //This will do the work properly but for consistency we don't want to use import and require both so we use alternative

dotenv.config({   //additional line in the dev of package.json file, we are using this as an experimental feature
  path: "./env",
});

const app = express();

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
