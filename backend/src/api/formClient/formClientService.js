const formClient = require('./formClient');

formClient.methods(['get', 'put', 'post', 'delete']);
formClient.updateOptions({ new: true, runValidators: true})

module.exports = formClient;