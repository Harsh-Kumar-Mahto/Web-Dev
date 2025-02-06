import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({limit:"16kb"}));   //limiting the size of the request
app.use(express.urlencoded({ extended: true, limit:"16kb" }));   //limiting the size of the request and tells to read the url of the request for related info
app.use(express.static("public"));  //for storing static files, public is the name of the file
app.use(cookieParser());    //to access and set the cookies from the user's browser


// import routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);    //this is a convention to write routes, after this the route will be forwarded to userRouter and this will act as prefix


export default app;
