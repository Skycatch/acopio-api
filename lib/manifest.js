'use strict';

const Path = require('path');
const Config = require(Path.join(process.cwd(), process.env.CONFIG));
const internals = {};

internals.manifest = {
  server: {
  },
  connections: [
    {
      port: Config.port,
      labels: ['web']
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'good',
        options: {
          reporters: {
            consoleReporter: [
              {
                module: 'good-console'
              },
              'stdout'
            ]
          }
        }
      }
    },
    {
      plugin: {
        register: './plugins/health',
        options: {
          'basepath': '/v1'
        }
      }
    },
    {
      plugin: './plugins/api'
    }
  ]
};

module.exports = internals.manifest;
