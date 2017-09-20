'use strict';

const API = require('..');
const Config = require('../config/config');

const internals = {
  run() {

    const api = new API(Config);
    api.run();
  }
};

internals.run();
