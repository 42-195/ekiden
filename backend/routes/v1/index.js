const Router = require('koa-router');
const stocks = require('./stocks/routes');
const boards = require('./boards/routes');
const balance = require('./balance/routes');
const cash = require('./cash/routes');
const profit = require('./profit/routes');
const indicator = require('./indicator/routes');

const v1 = new Router({
  prefix: '/v1',
});

v1.use(stocks.routes());
v1.use(boards.routes());
v1.use(balance.routes());
v1.use(cash.routes());
v1.use(profit.routes());
v1.use(indicator.routes());

module.exports = v1;
