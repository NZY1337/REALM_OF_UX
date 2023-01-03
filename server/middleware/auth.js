import jwt from "jsonwebtoken";

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).send({ error: "Authentication Invalid, please do login!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    console.log({ err });
    return res.status(401).send({ error: "Authentication Invalid, please do login!" });
  }
};

export default authenticateUser;
