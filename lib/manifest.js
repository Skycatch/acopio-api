'use strict';

const Sequelize = require('sequelize');
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
        register: 'hapi-sequelize',
        options: [
          {
            name: 'acopiodb',
            models: ['./lib/models/**/*.js'],
            sequelize: new Sequelize(Config.mysql.database, Config.mysql.user, Config.mysql.password, {
              host: Config.mysql.host,
              port: Config.mysql.port,
              dialect: 'mysql'
            }),
            sync: false
          }
        ]
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
