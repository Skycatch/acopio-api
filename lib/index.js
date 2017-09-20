'use strict';

const Glue = require('glue');

exports.init = (manifest, options, next) => {

  Glue.compose(manifest, options, (err, server) => {

    if (err) {
      return next(err);
    }

    return server.start((err) => {

      return next(err, server);
    });
  });
};
