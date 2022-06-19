const rateLimit = require('express-rate-limit');

const apiLimit = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, /* 24 hours refresh */
  max: 3, /* api call limit */
  message: 'Uh oh! You have reached the maximum api call.',
  headers: true
});

module.exports = apiLimit;
