'use strict';

const Util = require('util');

const internals = {
  log: Util.debuglog('acopio-api')
}

module.exports = class API {

  constructor(config = {}) {

    this._mysql = config.mysql;
  }

  run() {

    internals.log(`Connecting to mysql host: ${this._mysql.host}`);
    internals.log(`Connecting as mysql user: ${this._mysql.user}`);
    internals.log(`Connecting to mysql db: ${this._mysql.database}`);
  }
};
