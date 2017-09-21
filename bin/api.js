'use strict';

const API = require('..');
const Config = require('../config/config');

const internals = {
  run() {

    const api = new API(Config);
    api.run()
      .catch((err) => {

        console.error(err);
        process.exit(1);
      });
  }
};

internals.run();
