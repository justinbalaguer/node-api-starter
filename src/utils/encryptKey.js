const crypto = require('crypto');

const encryptKey = (text) => crypto.Hmac('sha256', process.env.API_SECRET)
  .update(text)
  .digest('hex');

module.exports = encryptKey;
