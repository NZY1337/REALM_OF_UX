// https://www.npmjs.com/package/http-status-codes - we can use the library but for now its ok
/*
    500 - internal server err;
    400 - bad request
    401 - unauthorized
*/
const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultErr = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, please try again later",
  };
  console.log(err);
  // those come from mongoose
  if (err.name === "ValidationError") {
    defaultErr.statusCode = 400;
    defaultErr.msg = err.message;
  }

  if (err.code && err.code === 11000) {
    defaultErr.statusCode = 400;
    defaultErr.msg = "field has to be unique";
  }
  res.status(defaultErr.statusCode).json({ msg: defaultErr.msg });
};

export default errorHandlerMiddleware;
