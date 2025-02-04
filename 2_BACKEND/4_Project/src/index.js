import connectDB from "./db/index.js";
import app from "./app.js";
import dotenv from "dotenv";

// require('dotenv').config({path: './env'})      //This will do the work properly but for consistency we don't want to use import and require both so we use alternative

dotenv.config({   //additional line in the dev of package.json file, we are using this as an experimental feature
  path: "./env",
});

connectDB()           //function call to connect to database
  .then(() => {
    app.on("error", (error) => {           //in case there is a problem in communication after a successful connection
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {       //backend is listening
      console.log(`Running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {        //in case of any error
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
