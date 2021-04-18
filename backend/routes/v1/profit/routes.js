const Router = require('koa-router');
const string2number = require('../../../lib/string2number');
const getStockType = require('../../../lib/getStockType');
const dip = require('../../../spiders');
const Profit = require('./model');

const router = new Router({ prefix: '/profit' });

// Healthcheck
router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.get('/get', async (ctx) => {
  const { year = new Date().getFullYear(), code } = ctx.query;
  const result = await Profit.find({
    code, date: { $gte: `${year}-1-1`, $lte: `${year}-12-31` },
  });
  if (result) {
    ctx.body = result;
  } else {
  // 根据股票编码获取板块
    const boards = await dip.stock.symbols.getBoards(code);
    const boardCodes = boards.map((board) => board.code);
    const type = getStockType(boardCodes);
    const response = await dip.stock.finance.getProfitStatment(code, year, type);
    // 原始数据经过一次处理，“--” to null，string to number
    const rawdata = string2number(response).profit_statemet
      .map((item) => ({ code, ...item }));
    // 存储至数据库
    Profit.insertMany(rawdata);
    // 需要区分股票类型
    ctx.body = rawdata;
  }
});

module.exports = router;
