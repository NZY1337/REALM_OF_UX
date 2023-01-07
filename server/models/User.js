import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
const { genSalt, hash, compare } = bcrypt;
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false, //password will be excluded
  },
});

//hooks are async
UserSchema.pre("save", async function () {
  /*
    The isModified method is a Mongoose method that checks if the specified path has been modified. In this case, the path is "password". 
    If the password has not been modified, the function returns and does not run the code to hash the password. 
    If the password has been modified, the function continues to execute and hashes the password using the genSalt and hash functions, 
    which are probably asynchronous functions for generating a salt (random string used for hashing) and hashing the password using the salt.

    - if the password is not changed - to not hash the hashed password (tricky)
  */

  if (!this.isModified("password")) return;
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (userPassword) {
  if (!userPassword || !this.password) return false;
  const isMatch = await compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
