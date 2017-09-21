'use strict';

/**
 * @param {array} routes - Array of route paths to be added
 */
exports.addRoutes = function (routes, server, options, next) {

  for (const route of routes) {
    require(route).register(server, options, (err) => {

      if (err) {
        next(err);
      }
    });
  }
};
