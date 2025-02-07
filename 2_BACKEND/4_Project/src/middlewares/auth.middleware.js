import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"

// Here in this controller we are verifying the user from the access token

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")  //accessToken is accessed here by the cookies in the req or from header if it is mobile devepoment
    
        if(!token){   //if token empty unauthorized
            throw new ApiError(401, "Unauthorized request!")
        }
    
        const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);  //decode the data in access token with secret
    
        const user = await User.findById(decodedData?._id).select("-password -refreshToken")   //find out the user using the id in the access token
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;    //attach authenticated user
        next()  //pass the control to next function
        
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }

})