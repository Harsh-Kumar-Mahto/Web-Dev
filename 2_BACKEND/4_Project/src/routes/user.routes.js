import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/register").post(upload.fields([      //we are using the upload multer middleware to save the files in the local storage before registering user
    {
        name : "avatar",   //these will be used during registration for checking and upload on cloudinary in controller file
        maxCount : 1,
    },
    {
        name : "coverImage",
        maxCount : 1,
    }
]),registerUser)    //this is additional route after /api/v1/users and will call registerUser that will work on post request

export default router