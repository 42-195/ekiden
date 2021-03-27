const Router = require('koa-router');
const dip = require('../../../spiders');

const router = new Router({
  prefix: '/boards',
});

// 获取沪深 A 股行业板块列表
router.get('/getIndustryList', async (ctx) => {
  const data = await dip.stock.symbols.getIndustryList();
  ctx.body = data;
});

// 获取沪深 A 股地域板块列表
router.get('/getAreaList', async (ctx) => {
  const data = await dip.stock.symbols.getAreaList();
  ctx.body = data;
});

// 获取沪深 A 股概念板块列表
router.get('/getConceptList', async (ctx) => {
  const data = await dip.stock.symbols.getConceptList();
  ctx.body = data;
});

// 获取个股所属板块列表
router.get('/getBoardsByCode', async (ctx) => {
  const { code } = ctx.query;
  const data = await dip.stock.symbols.getBoards(code);
  ctx.body = data;
});

module.exports = router;
