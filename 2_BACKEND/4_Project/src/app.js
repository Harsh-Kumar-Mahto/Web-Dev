import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ProcessingInstruction.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({limit:"16kb"}));   //limiting the size of the request
app.use(express.urlencoded({ extended: true, limit:"16kb" }));   //limiting the size of the request and tells to read the url of the request for related info
app.use(express.static("public"));  //for storing static files, public is the name of the file
app.use(cookieParser());    //to access and set the cookies from the user's browser

export default app;
