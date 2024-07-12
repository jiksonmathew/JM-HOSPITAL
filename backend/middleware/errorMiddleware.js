class errorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new errorHandler(message, 400);
  }
  if (err.Name === "JsonWebTokenError") {
    const message = "Json Web Token is invalid, try again";
    err = new errorHandler(message, 400);
  }
  if (err.Name === "TokenExpiredError") {
    const message = "Json Web Token is expired, try again";
    err = new errorHandler(message, 400);
  }
  if (err.Name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new errorHandler(message, 400);
  }
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;
