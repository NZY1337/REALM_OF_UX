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
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  console.log(this.password);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await compare(userPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
