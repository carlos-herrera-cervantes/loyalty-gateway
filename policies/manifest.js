'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const jwtValidatorPolicy = require('./jwt-validator');
    const apiKeyValidatorPolicy = require('./api-key-validator');

    pluginContext.registerPolicy(jwtValidatorPolicy);
    pluginContext.registerPolicy(apiKeyValidatorPolicy);
  },
  policies: [
    'jwt-validator',
    'api-key-validator',
  ],
};
