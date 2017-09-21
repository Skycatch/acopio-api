'use strict';

exports.register = function (server, options, next) {

  require('./post').register(server, options, (err) => {

    if (err) {
      next(err);
      return;
    }
    
    require('./get').register(server, options, next);
  });
};

exports.register.attributes = {
  name: 'responsables'
};
