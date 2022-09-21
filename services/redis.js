'use strict';

const { Client } = require('redis-om');

class Redis {
  constructor() {
    this.client = new Client();
  }

  async connect() {
    await this.client.open(process.env.REDIS_HOST);
    return this.client;
  }
}

module.exports = new Redis();
