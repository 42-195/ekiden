const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const stockSchema = new mongoose.Schema({
  symbol: String, // 带市场标识的股票代码
  name: String, // 股票名称
  code: String, // 不带市场标识的股票代码
  board: [{
    code: String,
    name: String,
  }], // 个股所属板块
  market: String, // 上市地
  consignee: String, // 主承销商
  underwriting: String, // 承销方式
  sponsor: String, // 上市推荐人
  issue_price: Number, // 每股发行价(元)
  issue_mode: String, // 发行方式
  issue_pe: String, // 发行市盈率（按发行后总股本）
  pre_capital: Number, // 首发前总股本（万股）
  capital: Number, // 首发后总股本（万股）
  issue_volume: Number, // 实际发行量（万股）
  expected_fundraising: Number, // 预计募集资金（万元）
  fundraising: Number, // 最实际募集资金合计（万元）
  issue_cost: Number, // 发行费用总额（万元）
  net_amount_raised: Number, // 募集资金净额（万元）
  underwriting_fee: Number, // 承销费用（万元）
  announcement_date: Date, // 招股公告日
  launch_date: Date, // 上市日期
}, { autoCreate: true, strict: 'throw' });

stockSchema.plugin(mongoosePaginate);
stockSchema.plugin(idPlugin);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
