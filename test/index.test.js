'use strict';

const coffee = require('coffee');
const path = require('path');

describe('test/index.test.js', () => {
  const cli = path.join(__dirname, '../bin/create-hdesign.js');

  it('should call hdesign-component-init', () => {
    return coffee.fork(cli, [ '--help' ])
      .expect('stdout', /init hdesign component from template/)
      .expect('code', 0)
      .end();
  });
});