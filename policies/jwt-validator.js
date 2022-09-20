'use strict';

const Redis = require('../services/redis');

module.exports = {
  name: 'jwt-validator',
  policy: (actionParams) => async (req, res, next) => {
    const jwt = req.headers['authorization'].split(' ').pop();
    const userEmail = req.headers['user-email'];
    const client = await Redis.connect();

    const sessionJwt = await client.get(`jwt:${userEmail}`);
    const trustedJwt = sessionJwt ? jwt == sessionJwt.replace(/"/g, '') : false;

    return trustedJwt ? next() : res.status(401).send();
  }
};
