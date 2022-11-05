exports.clientError = async (res, statusCode, message) => {
  res.status(statusCode).send({
    success: false,
    message: message
  });
};
exports.serverError = async (res, statusCode, message) => {
  res.status(statusCode).send({
    success: false,
    message: message
  });
};
