const response = (res, code, message, result) => {
  if (!res) throw new Error("Response not defined");

  res.status(code).send({
    statusCode: code,
    message: message || "Empty response",
    result: result || {},
  });
};


module.exports = response;
