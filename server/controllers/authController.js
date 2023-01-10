import User from "../models/user.js";

class UserController {
  async registerUser(req, res, next) {
    const { name, email, password } = req.body;
    try {
      if (!name || !email || !password) {
        next({ message: "Please provide all values", statusCode: 400 });
        return;
      }

      const userAlreadyExists = await User.findOne({ email });

      if (userAlreadyExists) {
        next({ message: "User already exists", statusCode: 400 });
      }

      const user = await User.create({ name, email, password });
      const token = user.createJWT();

      // select=false doesn't work with .create in UserSchema, so we pick manually what we send back to client
      res
        .status(201)
        .json({ user: { email: user.email, name: user.name }, token });
    } catch (err) {
      next(err);
    }
  }

  async loginUser(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        next({ message: "Please provide all values", statusCode: 400 });
      }
      // check userSchema -> on response password is hidden;
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        next({ message: "Invalid Credentials", statusCode: 401 });
      }

      const isPasswordCorrect = await user.comparePassword(password);

      if (!isPasswordCorrect) {
        next({ message: "Invalid Credentials", statusCode: 401 });
      }

      const token = user.createJWT();
      user.password = undefined;
      res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const { name, email, avatar } = req.body;

    try {
      if (!name || !email) {
        next({ message: "Please provide all values", statusCode: 400 });
        return;
      }

      const user = await User.findOne({ _id: req.user.userId });

      user.name = name;
      user.email = email;

      if (avatar) {
        user.avatar = avatar;
      }

      await user.save();

      const token = user.createJWT();

      return res.status(201).json({ user, token });
    } catch (err) {
      next(err);
    }
  }

  async updateUserPassword(req, res, next) {
    try {
      const { password, newPassword } = req.body;
      console.log({password, newPassword})

      if (!password || !newPassword) {
        next({ message: "Please provide all values", statusCode: 400 });
      }

      const user = await User.findOne({ _id: req.user.userId }).select(
        "+password"
      );

      const isPasswordCorrect = await user.comparePassword(password);

      if (!isPasswordCorrect) {
        next({ message: "Invalid credentials", statusCode: 400 });
      }

      user.password = newPassword;

      await user.save();

      return res.status(200).json({ success: "Password Updated!" });
    } catch (err) {
      next(err);
    }
  }
}

export { UserController };
