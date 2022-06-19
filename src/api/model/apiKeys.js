const mongoose = require('mongoose');

const { Schema } = mongoose;

const apiKeys = new Schema({
  key: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const ApiKey = mongoose.model('ApiKey', apiKeys, 'api_keys');

module.exports = ApiKey;
