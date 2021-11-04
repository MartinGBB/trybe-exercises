const MIN_LENGTH_NAME = 3;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN_LENGTH_PASSWORD = 4;
const MAX_LENGTH_PASSWORD = 8;

const validateName = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length < MIN_LENGTH_NAME ) {
    return res.status(400).json({ message: "invalid username" });
  };
  next()
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || EMAIL_REGEX.test(email)){
    return res.status(400).json({ message: 'invalid email'});
  };
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password > MIN_LENGTH_PASSWORD || password < MAX_LENGTH_PASSWORD) {
    return res.status(400).json({ message: 'invalid password'});
  }
  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
