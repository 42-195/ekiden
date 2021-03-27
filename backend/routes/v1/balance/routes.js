const Router = require('koa-router');
const dip = require('../../../spiders');

const router = new Router({ prefix: '/balance' });

router.get('/', async (ctx) => {
  ctx.body = 'ok';
});

router.get('/get', async (ctx) => {
  const data = await dip.stock.finance.getBalanceSheet('000651', '2018', 'general');
  
  ctx.body = data;
});

module.exports = router;
