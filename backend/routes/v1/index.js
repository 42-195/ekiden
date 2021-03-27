const Router = require('koa-router');
const stocks = require('./stocks/routes');
const boards = require('./boards/routes');
const balance = require('./balance/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.use(stocks.routes());
v1.use(boards.routes());
v1.use(balance.routes());

module.exports = v1;
