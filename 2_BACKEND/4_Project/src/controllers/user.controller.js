import {asyncHandler} from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {    //this controller will be sent to as soon as a post request is made to /api/v1/users/register
    // following are the steps we have to take care of :-
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for image, check avatar
    // upload them to coudinary, avatar
    // create user object - create entry on db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {username, email, fullname, password} = req.body    //all the text data of the form can be extracted from the body
    console.log(username + "  " + email);


    if([fullname, username, email, password].some((field) =>   //we can also check them one by one but this is a different technique
        field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required");  //throwing error in predefined structure in the utils
    }
    

    const existedUser = await User.findOne({               //User from model is the only one who can contact with the db and hence we user it to find the pre-existing user
        $or : [{username}, {email}]     //or is not necessary but here we are checking for two criterias so we have to use
    })
    if(existedUser){    //check the existedUser
        throw new ApiError(409, "User with this email or username already exists");
    }


    const avatarLocalPath = req.files?.avatar[0]?.path;    //since we have file in local path because of multer, we perform a check if it exists and then store its actual path only
    if(!avatarLocalPath){   //because avatar is required field
        throw new ApiError(400, "Avatar is required");
    }
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;  //similarly here also extract path out of various info of the image    //this will cause error when the user doesn't give the cover image(as it is not requierd), we have to handle differently
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    } 


    const avatar = await uploadOnCloudinary(avatarLocalPath);  //upload on cloudinary
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){   //check avatar exists
        throw new ApiError(402, "Avatar is not in cloudinary")
    }


    const user = await User.create({   //now create user with the model
        fullname,
        username : username.toLowerCase(),
        avatar : avatar.url,
        coverImage : coverImage?.url || "",  //cover image is not required so maybe empty therefore we need to check
        email,
        password,
    })


    const createdUser = await User.findById(user._id).select("-password -refreshToken")   //check if the user is created or not, _id is self generated and we need not to do anything
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user");
    }


    return res.status(201).json(   //sending a response once user is registered
        new ApiResponse(200, createdUser, "User Registered Successfully")
    )

})

export {registerUser}