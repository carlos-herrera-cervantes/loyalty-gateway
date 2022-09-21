'use strict';

const Redis = require('../services/redis');

module.exports = {
  name: 'api-key-validator',
  policy: (actionsParams) => async (req, res, next) => {
    const apiKey = req.headers['api-key'];
    const client = await Redis.connect();
    const trustedApiKey = await client.get(`api_key:${apiKey}`);

    return trustedApiKey ? next() : res.status(401).send();
  },
};
