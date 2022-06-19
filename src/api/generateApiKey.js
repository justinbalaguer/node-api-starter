const crypto = require('crypto');
const ApiKey = require('./model/apiKeys');
const encryptKey = require('../utils/encryptKey');

const generateApiKey = async (_, res, next) => {
  const randomKey = crypto.randomBytes(15).toString('hex');
  const encryptRandomKey = encryptKey(randomKey);
  try {
    await ApiKey.create({ key: encryptRandomKey });
    res.json({
      key: randomKey
    });
  } catch (error) {
    next(error);
  }
};

module.exports = generateApiKey;
