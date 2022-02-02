const randomAuthMiddleware = (req, res, next) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log('The random number', randomNumber);

  if (randomNumber <= 5) next();
  if (randomNumber > 5 && randomNumber <= 10) res.status(401).send('FAILED!!');
};

module.exports = randomAuthMiddleware;
