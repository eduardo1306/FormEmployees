const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/formClient', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});