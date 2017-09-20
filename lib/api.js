'use strict';

const Hapi = require('hapi');
const Util = require('util');

const internals = {
  kDefaultAPIHost: 'localhost',

  log: Util.debuglog('acopio-api')
};

module.exports = class API {

  constructor(config = {}) {

    this._mysql = config.mysql;

    this._server = new Hapi.Server();
    this._server.connection({
      host: internals.kDefaultAPIHost,
      port: config.port
    });
  }

  // Starts listening

  run() {

    internals.log(`Connecting to mysql host: ${this._mysql.host}`);
    internals.log(`Connecting as mysql user: ${this._mysql.user}`);
    internals.log(`Connecting to mysql db: ${this._mysql.database}`);

    this._initializeRoutes();
    return this._server.start();
  }

  // Add the routes to the server

  _initializeRoutes() {

    // Add the route
    this._server.route({
      method: 'GET',
      path:'/',
      handler: (request, reply) => {

        return reply('hello world');
      }
    });
  }
};
