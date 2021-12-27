const LENGTH_TOKEN = 12;

const token = (_req, res) => {
  const cadena = Math.random().toString(36).substr(2)
  const token = (cadena + cadena).substr(0, LENGTH_TOKEN);
  res.status(200).json({ token });
};

module.exports = token;
