const Router = require('koa-router');
const Stock = require('./model');
const dip = require('../../../spiders');

const router = new Router({
  prefix: '/stocks',
});

// Healthcheck
router.get('/health', async (ctx) => {
  ctx.status = 200;
});

router.get('/getStockList', async (ctx) => {
  const data = await dip.stock.symbols.getStockList();
  data.forEach(async (item) => {
    try {
      const stock = new Stock(item);
      await stock.save();
      ctx.status = 201;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  });
});

module.exports = router;
