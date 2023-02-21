const errorHandler = (err, req, res, next) => {
  const statusCode = res.status || 500;
  console.log(res.status);

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
