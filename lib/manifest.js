'use strict';

const Config = require('settings-module');
const Sequelize = require('sequelize');
const internals = {};

internals.manifest = {
  server: {
  },
  connections: [
    {
      port: Config.get('port'),
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
            sequelize: new Sequelize(Config.get('mysql').database, Config.get('mysql').user, Config.get('mysql').password, {
              host: Config.get('mysql').host,
              port: Config.get('mysql').port,
              dialect: 'mysql'
            }),
            sync: false
          }
        ]
      }
    },
    {
      plugin: {
        register: 'inert',
        options: {
          auth: false
        }
      }
    },
    {
      plugin: 'vision'
    },
    {
      plugin: {
        register: 'hapi-swagger',
        options: {
          info: {
            title: 'Acopios API',
            version: '0.0.1'
          },
          securityDefinitions: {
            jwt: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header'
            }
          },
          security: [{ jwt: [] }]
        }
      },
      options: {
        select: ['web']
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
      plugin: {
        register: './plugins/auth'
      }
    },
    {
      plugin: './plugins/api'
    },
    {
      plugin: './plugins/acopios'
    },
    {
      plugin: './plugins/acopios/productos'
    }
  ]
};

module.exports = internals.manifest;
