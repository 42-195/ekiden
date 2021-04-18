const Router = require('koa-router');
const dip = require('../../../spiders');
const Indicator = require('./model');
const string2number = require('../../../lib/string2number');

const router = new Router({ prefix: '/indicator' });

// Healthcheck
router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.get('/get', async (ctx) => {
  const { year = new Date().getFullYear(), code } = ctx.query;
  const result = await Indicator.find({
    code, date: { $gte: `${year}-1-1`, $lte: `${year}-12-31` },
  });
  if (result) {
    ctx.body = result;
  } else {
    const response = await dip.stock.finance.getGuideLine(code, year);
    // 原始数据经过一次处理，“--” to null，string to number
    const rawdata = string2number(response);
    const data = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < rawdata.share_index.length; index++) {
      data[index] = {
        code,
        ...rawdata.share_index[index],
        ...rawdata.profitability[index],
        ...rawdata.growth_ability[index],
        ...rawdata.operation_ability[index],
        ...rawdata.debt_decapital_structure[index],
        ...rawdata.cash_flow[index],
      };
    }
    Indicator.insertMany(data);
    // 需要区分股票类型
    ctx.body = data;
  }
});

module.exports = router;
