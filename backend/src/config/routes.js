const express = require('express');

module.exports = function(server) {

  const router = express.Router();
  server.use('/', router);

  const formClientService = require('../api/formClient/formClientService');
  formClientService.register(router, '/api');
}