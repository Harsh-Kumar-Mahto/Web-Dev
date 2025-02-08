import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  //this is a standalone function in order to generate both tokens
  try {
    const user = await User.findOne(userId); //here we are searching the user

    const refreshToken = await user.generateRefreshToken(); //generate refresh token
    const accessToken = await user.generateAccessToken(); //generate access token

    user.refreshToken = refreshToken; //set refresh token to the user
    console.log(user.refreshToken);
    await user.save({ validateBeforeSave: false }); //save user without any validation otherwise password will be needed again

    return { accessToken, refreshToken }; //return the generated tokens
  } catch (error) {
    throw new ApiError(500, "Error while generating tokens!");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //this controller will be sent to as soon as a post request is made to /api/v1/users/register
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

  const { username, email, fullname, password } = req.body; //all the text data of the form can be extracted from the body
  console.log(username + "  " + email);

  if (
    [fullname, username, email, password].some(
      (
        field //we can also check them one by one but this is a different technique
      ) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required"); //throwing error in predefined structure in the utils
  }

  const existedUser = await User.findOne({
    //User from model is the only one who can contact with the db and hence we user it to find the pre-existing user
    $or: [{ username }, { email }], //or is not necessary but here we are checking for two criterias so we have to use
  });
  if (existedUser) {
    //check the existedUser
    throw new ApiError(409, "User with this email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path; //since we have file in local path because of multer, we perform a check if it exists and then store its actual path only
  if (!avatarLocalPath) {
    //because avatar is required field
    throw new ApiError(400, "Avatar is required");
  }
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;  //similarly here also extract path out of various info of the image    //this will cause error when the user doesn't give the cover image(as it is not requierd), we have to handle differently
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath); //upload on cloudinary
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    //check avatar exists
    throw new ApiError(402, "Avatar is not in cloudinary");
  }

  const user = await User.create({
    //now create user with the model
    fullname,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "", //cover image is not required so maybe empty therefore we need to check
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); //check if the user is created or not, _id is self generated and we need not to do anything
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(
    //sending a response once user is registered
    new ApiResponse(200, createdUser, "User Registered Successfully")
  );
});

const loginUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validate that fields must not be empty
  // check if the user with that name or email exists
  // check the password
  // generate access token and refresh token
  // send cookies

  const { email, username, password } = req.body; //capture details
  if (!username && !email) {
    //check that we should either get one of them
    throw new ApiError(400, "Username or email is required!!");
  }

  if (!password) {
    //check password must not be empty
    throw new ApiError(400, "Password required!!");
  }

  const user = await User.findOne({
    //find a user based on either username or email whichever given
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User doesn't exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password); //validate the password, we need to the user because it is the required instance. User will be used when we want to access features of mongoose and db connections
  if (!isPasswordValid) {
    throw new ApiError(401, "Incorrect password!!");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  ); //generate tokens of present user

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  ); //additional db call but will take data excluding the password and refreshtoken

  const options = {
    // these options are for cookies , by default cookies are modifiable easily
    httpOnly: true, //with these options tokens can only be modified from server and not from frontend
    secure: true,
  };

  return (
    res
      .status(200)
      //          key          value
      .cookie("accessToken", accessToken, options) //sending accessToken in cookies with options
      .cookie("refreshToken", refreshToken, options) //sending refreshToken in cookies with options
      .json(
        //sending response back to frontend, sending details inside the user
        new ApiResponse(
          200,
          { user: loggedInUser, accessToken, refreshToken },
          "User logged in successfully"
        )
      )
  );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    //using verifyJWT, user is added in req
    req.user._id, //from this user we find it in db and then set the refresh token undefined
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,    //return the updated document
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200) //return success code
    .clearCookie("accessToken", options) //remove accessToken from cookies
    .clearCookie("refreshToken", options) //remove refreshToken from cookies
    .json(new ApiResponse(200, {}, "User logged out!!"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Unmatched refresh token");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refreshToken");
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(409, "Current and new password required");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(401, "Unauthorized request");
  }

  if (await user.isPasswordCorrect(oldPassword)) {
    user.password = newPassword;
    await user.save({ validateBeforeSave: false });
  } else {
    throw new ApiError(400, "Invalid password");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Password changed successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(200, req.user, "User fetched successfully");
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { fullname, email } = req.body;

  if (!fullname || !email) {
    throw new ApiError(409, "Fullname and email required");
  }

  const user = User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullname, //both are correct
        email: email,
      },
    },
    { new: true }   //new user details will be returned
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"));
});

const updateAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path
  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar.url) {
    throw new ApiError(400, "Error while uploading on cloudinary");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res.status(200).json(new ApiResponse(200, user, "Avatar updated"));

});


const updateCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;
  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover Image is required");
  }

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!coverImage.url) {
    throw new ApiError(400, "Error while uploading on cloudinary");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Cover Image updated"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateAvatar,
  updateCoverImage,
};
