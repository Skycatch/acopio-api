'use strict';

exports.register = function (server, options, next) {

  require('./post').register(server, options, (err) => {
    require('./get').register(server, options, next);
  })
};

exports.register.attributes  = {
  name: 'acopios'
}
