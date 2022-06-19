const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');
const generateApiKey = require('./api/generateApiKey');
const apiLimit = require('./utils/rateLimit');

const app = express();

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
  // eslint-enable no-console
}

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

app.get('/', (_, res) => {
  res.json({
    message: '🦄'
  });
});

app.use('/key', apiLimit, generateApiKey);

app.use('/v1', middlewares.checkApiKey, api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
