import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

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

router.route("/login").post(loginUser)

//secure route
router.route("/logout").post(verifyJWT, logoutUser);  //first verifyJWT is called then next passes the control to logoutUser
router.route("/refresh-token").post(refreshAccessToken);

export default router