import jwt from "jsonwebtoken";

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .send({ authError: "Authentication Invalid, please do login!" });
    }

    const token = authHeader.split(" ")[1];
    console.log(token);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        error: "Invalid token"
      });
    }
    console.log({ err });
    res
      .status(401)
      .send({ authError: "Authentication Invalid, please do login!" });
  }
};

export default authenticateUser;
