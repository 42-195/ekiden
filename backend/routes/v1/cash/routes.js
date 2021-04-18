const Router = require('koa-router');
const string2number = require('../../../lib/string2number');
const getStockType = require('../../../lib/getStockType');
const dip = require('../../../spiders');
const Cash = require('./model');

const router = new Router({ prefix: '/cash' });

// Healthcheck
router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.get('/get', async (ctx) => {
  const { year = new Date().getFullYear(), code } = ctx.query;
  const result = await Cash.find({
    code, date: { $gte: `${year}-1-1`, $lte: `${year}-12-31` },
  });
  if (result) {
    ctx.body = result;
  } else {
  // 根据股票编码获取板块
    const boards = await dip.stock.symbols.getBoards(code);
    const boardCodes = boards.map((board) => board.code);
    const type = getStockType(boardCodes);
    const response = await dip.stock.finance.getCashFlowStatment(code, year, type);
    // 原始数据经过一次处理，“--” to null，string to number
    const rawdata = string2number(response).cash_flow
      .map((item) => ({ code, ...item }));
    // // 存储至数据库
    Cash.insertMany(rawdata);
    // 需要区分股票类型
    ctx.body = rawdata;
  }
});

module.exports = router;
