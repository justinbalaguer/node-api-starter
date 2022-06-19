const mongoose = require('mongoose');

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
