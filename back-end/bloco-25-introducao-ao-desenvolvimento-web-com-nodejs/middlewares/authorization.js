const validToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenValidate = /^[a-zA-Z0-9]{12}$/;
  if (tokenValidate.test(token)) return res.status(401).json({ message: "invalid token" });
  next();
};

module.exports = validToken;
