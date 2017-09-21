'use strict';

const Server = require('./index');
const Manifest = require('./manifest');
const internals = {};

internals.composeOptions = {
  relativeTo: __dirname // NOTE: use `Path.resolve(process.cwd() 'lib')` when using babel/typescript/rollup
};

Server.init(Manifest, internals.composeOptions, (err, server) => {

  console.log('init done');
  if (err) {
    console.error(err);
    throw err;
  }

  console.log('init web');
  const web = server.select('web');

  console.log('Web server started at: ', web.info.uri);
});
