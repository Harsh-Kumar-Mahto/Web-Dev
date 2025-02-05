import mongoose, { Schema } from "mongoose";
// Installed two more packages: npm install bcrypt jsonwebtoken
// bcrypt is used to counter the problem of password that need to be stored not as plain text in the database, basically some sort of encryption
// jsonwebtoken is used to generate so tokens with the help of some data(payload) in an encrypted manner
import jwt from "jsonwebtoken"; //jwt is a bearer token (basically a key, one who has it can access the data)
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    avatar: {
      type: String, //cloudinary url
      required: true,
    },

    coverImage: {
      type: String, //cloudinary url
    },

    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    refreshToken: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  //we are using pre middleware(also known as pre and post hooks which are basically plugins) here to just before save so that the password gets encrypted just before getting saved/changed, along with this a callback function is needed which must not be arrowfunction as they don't have the current context so we will not be able to use "this"
  if (!this.isModified("password")) return next(); //checking if the password is altered or not, if the password is not altered or saved (any other changes) we must not do anything to the password and pass the flag to next

  this.password = bcrypt.hash(this.password, 10); //if changes are done, hash the password using bcrypt and 10 is some number of rounds and then pass the flag to next
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  //other than predefined plugins we can make custom plugins so here we are making a plugin to check password is correct or not
  return await bcrypt.compare(password, this.password); //we are comparing the presently provided password with the already existing password using the feature of bcrypt, it will automatically provide boolean value so we directly return that
};

userSchema.methods.generateAccessToken = function () {
  //async not required as this is extremely fast
  return jwt.sign(        //this feature of jwt is used to generate the tokens, it takes the payloads(in the first object) then the secret key and the expriy time in the third object
    {
      // payloads
      _id: this._id,
      fullname: this.fullname,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,  //secret key
    {
      expiresIn: ACCESS_TOKEN_EXPIRY, //expiry
    }
  );
};

userSchema.methods.generateRefreshToken = function () {   //same as access token but it consists of less amount of data and is saved for longer period of time
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
