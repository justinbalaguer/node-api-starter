const ApiKey = require('./api/model/apiKeys');
const encryptKey = require('./utils/encryptKey');

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

/* eslint-disable no-unused-vars */
const errorHandler = (err, _, res, _next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
};

const checkApiKey = async (req, res, next) => {
  const { key } = req.query;

  if (!key) {
    res.json({
      message: 'Please provide a valid API key'
    });
  }

  const encryptKeyQuery = encryptKey(key);

  const [foundKey] = await ApiKey.find({ key: encryptKeyQuery });

  if (!foundKey) {
    res.json({
      message: 'API key not found! Please provide a valid API key'
    });
  }

  next();
};

module.exports = {
  notFound,
  errorHandler,
  checkApiKey
};
