const Router = require('koa-router');
const Stock = require('./model');
const dip = require('../../../spiders');

const router = new Router({
  prefix: '/stocks',
});

// Healthcheck
router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.get('/get', async (ctx) => {
  const { from = 'db', code } = ctx.query;
  if (from === 'db') {
    try {
      if (code) {
        // 根据股票编码获取股票
        const stock = await Stock.findOne({ code });
        // 根据股票编码获取板块
        const board = await dip.stock.symbols.getBoards(code);
        stock.board = board;
        // 更新板块信息
        await stock.save();
        const body = await Stock.findOne({ code }).lean().exec();
        ctx.body = body;
      } else {
        const stocks = await Stock.find();
        ctx.body = stocks;
      }
    } catch (error) {
      ctx.body = error;
    }
  } else {
    try {
      const stocks = await dip.stock.symbols.getStockList();
      const res = await Stock.insertMany(stocks);
      ctx.body = res;
    } catch (error) {
      ctx.body = error;
    }
  }
});

router.get('/deleteAll', async (ctx) => {
  const res = await Stock.deleteMany({});
  ctx.body = res;
});

module.exports = router;
