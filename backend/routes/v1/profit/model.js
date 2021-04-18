const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const profitSchema = new mongoose.Schema({
  code: String, // 股票代码
  date: Date, // 日期
  operating_income: Number, // 营业收入
  net_interest_income: Number, // 利息净收入
  interest_income: Number, // 其中：利息收入
  interest_expense: Number, // 减：利息支出
  n_fee_comm_income: Number, // 手续费及佣金净收入
  comm_income: Number, // 其中:手续费及佣金收入
  comm_expenses: Number, // 减：手续费及佣金支出
  exchange_gains: Number, // 汇兑收益
  investment_income: Number, // 投资净收益
  jv_invest_income: Number, // 其中:对联营公司的投资收益
  fair_value_change_income: Number, // 公允价值变动净收益
  other_income: Number, // 其他业务收入
  operating_expenses: Number, // 营业支出
  tax_surcharges: Number, // 营业税金及附加
  management_expenses: Number, // 业务及管理费用
  asset_loss: Number, // 资产减值损失
  other_expenses: Number, // 其他业务支出
  operating_profit: Number, // 营业利润
  plus_nop_income: Number, // 加:营业外收入
  less_nop_expenses: Number, // 减:营业外支出
  total_profit: Number, // 利润总额
  less_income_tax: Number, // 减:所得税
  net_profit: Number, // 净利润
  profits_to_pcom: Number, // 归属于母公司的净利润
  minority_interest_income: Number, // 少数股东权益
  basic_earnings_per_share: Number, // 基本每股收益(元/股)
  diluted_earnings_per_share: Number, // 稀释每股收益(元/股)
  other_compr_income: Number, // 其他综合收益
  t_compr_income: Number, // 综合收益总额
  t_compr_income_attr_p: Number, // 归属于母公司所有者的综合收益总额
  t_compr_income_attr_ms: Number, // 归属于少数股东的综合收益总额
  earned_premium: Number, // 已赚保费
  prem_income: Number, // 保费业务收入
  reins_income: Number, // 其中:分保费收入
  out_prem: Number, // 减:分出保费
  une_prem_reser: Number, // 提取未到期责任准备金
  jv_invest_loss: Number, // 其中:对联营企业和合营企业的投资损失
  withdrawal: Number, // 退保金
  payout: Number, // 赔付支出
  compens_payout_refu: Number, // 减:摊回赔付支出
  reser_insur_liab: Number, // 提取保险责任准备金
  insur_reser_refu: Number, // 减:摊回保险责任准备金
  div_payt: Number, // 保户红利支出
  reinsurance_costs: Number, // 分保费用
  management_costs: Number, // 管理费用
  reins_cost_refund: Number, // 减:摊回分保费用
  n_sec_tb_income: Number, // 代理买卖证券业务净收入
  n_sec_uw_income: Number, // 证券承销业务净收入
  n_asset_mg_income: Number, // 受托客户资产管理业务净收入
  earnings_per_share: Number, // 每股收益
  total_income: Number, // 营业总收入
  income: Number, // 营业收入
  total_costs: Number, // 营业总成本
  costs: Number, // 营业成本
  sales_expense: Number, // 销售费用
  financial_expenses: Number, // 财务费用
  nca_disploss: Number, // 其中：非流动资产处置损失
  deduct_income_tax: Number, // 减：所得税费用
  // // 银行
  // bank: {
  //   code: String, // 股票代码
  //   date: Date, // 日期
  //   operating_income: Number, // 营业收入
  //   net_interest_income: Number, // 利息净收入
  //   interest_income: Number, // 其中：利息收入
  //   interest_expense: Number, // 减：利息支出
  //   n_fee_comm_income: Number, // 手续费及佣金净收入
  //   comm_income: Number, // 其中:手续费及佣金收入
  //   comm_expenses: Number, // 减：手续费及佣金支出
  //   exchange_gains: Number, // 汇兑收益
  //   investment_income: Number, // 投资净收益
  //   jv_invest_income: Number, // 其中:对联营公司的投资收益
  //   fair_value_change_income: Number, // 公允价值变动净收益
  //   other_income: Number, // 其他业务收入
  //   operating_expenses: Number, // 营业支出
  //   tax_surcharges: Number, // 营业税金及附加
  //   management_expenses: Number, // 业务及管理费用
  //   asset_loss: Number, // 资产减值损失
  //   other_expenses: Number, // 其他业务支出
  //   operating_profit: Number, // 营业利润
  //   plus_nop_income: Number, // 加:营业外收入
  //   less_nop_expenses: Number, // 减:营业外支出
  //   total_profit: Number, // 利润总额
  //   less_income_tax: Number, // 减:所得税
  //   net_profit: Number, // 净利润
  //   profits_to_pcom: Number, // 归属于母公司的净利润
  //   minority_interest_income: Number, // 少数股东权益
  //   basic_earnings_per_share: Number, // 基本每股收益(元/股)
  //   diluted_earnings_per_share: Number, // 稀释每股收益(元/股)
  //   other_compr_income: Number, // 其他综合收益
  //   t_compr_income: Number, // 综合收益总额
  //   t_compr_income_attr_p: Number, // 归属于母公司所有者的综合收益总额
  //   t_compr_income_attr_ms: Number, // 归属于少数股东的综合收益总额
  // },
  // 保险
  // insurance: {
  //   code: String, // 股票代码
  //   date: Date, // 日期
  //   operating_income: Number, // 营业收入
  //   earned_premium: Number, // 已赚保费
  //   prem_income: Number, // 保费业务收入
  //   reins_income: Number, // 其中:分保费收入
  //   out_prem: Number, // 减:分出保费
  //   une_prem_reser: Number, // 提取未到期责任准备金
  //   investment_income: Number, // 投资净收益
  //   jv_invest_loss: Number, // 其中:对联营企业和合营企业的投资损失
  //   fair_value_change_income: Number, // 公允价值变动损益
  //   exchange_gains: Number, // 汇兑损益
  //   other_income: Number, // 其他业务收入
  //   operating_expenses: Number, // 营业支出
  //   withdrawal: Number, // 退保金
  //   payout: Number, // 赔付支出
  //   compens_payout_refu: Number, // 减:摊回赔付支出
  //   reser_insur_liab: Number, // 提取保险责任准备金
  //   insur_reser_refu: Number, // 减:摊回保险责任准备金
  //   div_payt: Number, // 保户红利支出
  //   reinsurance_costs: Number, // 分保费用
  //   tax_surcharges: Number, // 营业税金及附加
  //   comm_expenses: Number, // 手续费及佣金支出
  //   management_costs: Number, // 管理费用
  //   reins_cost_refund: Number, // 减:摊回分保费用
  //   other_expenses: Number, // 其他业务成本
  //   asset_loss: Number, // 资产减值损失
  //   operating_profit: Number, // 营业利润
  //   plus_nop_income: Number, // 加:营业外收入
  //   less_nop_expenses: Number, // 减:营业外支出
  //   total_profit: Number, // 利润总额
  //   less_income_tax: Number, // 减:所得税
  //   net_profit: Number, // 净利润
  //   profits_to_pcom: Number, // 归属于母公司的净利润
  //   minority_interest_income: Number, // 少数股东权益
  //   basic_earnings_per_share: Number, // 基本每股收益(元/股)
  //   diluted_earnings_per_share: Number, // 稀释每股收益(元/股)
  //   other_compr_income: Number, // 其他综合收益
  //   t_compr_income: Number, // 综合收益总额
  //   t_compr_income_attr_p: Number, // 归属于母公司所有者的综合收益总额
  //   t_compr_income_attr_ms: Number, // 归属于少数股东的综合收益总额
  // },
  // 证券
  // security: {
  //   code: String, // 股票代码
  //   date: Date, // 日期
  //   operating_income: Number, // 营业收入
  //   n_fee_comm_income: Number, // 手续费及佣金净收入
  //   n_sec_tb_income: Number, // 代理买卖证券业务净收入
  //   n_sec_uw_income: Number, // 证券承销业务净收入
  //   n_asset_mg_income: Number, // 受托客户资产管理业务净收入
  //   net_interest_income: Number, // 利息净收入
  //   interest_income: Number, // 其中:利息收入
  //   interest_expense: Number, // 利息支出
  //   investment_income: Number, // 投资收益
  //   jv_invest_income: Number, // 其中:对联营企业和合营企业的投资收益
  //   fair_value_change_income: Number, // 公允价值变动损益
  //   exchange_gains: Number, // 汇兑损益
  //   other_income: Number, // 其他业务收入
  //   operating_expenses: Number, // 营业支出
  //   tax_surcharges: Number, // 营业税金及附加
  //   management_costs: Number, // 管理费用
  //   asset_loss: Number, // 资产减值损失
  //   other_expenses: Number, // 其他业务成本
  //   operating_profit: Number, // 营业利润
  //   plus_nop_income: Number, // 加:营业外收入
  //   less_nop_expenses: Number, // 减:营业外支出
  //   total_profit: Number, // 利润总额
  //   less_income_tax: Number, // 减:所得税
  //   net_profit: Number, // 净利润
  //   profits_to_pcom: Number, // 归属于母公司的净利润
  //   minority_interest_income: Number, // 少数股东权益
  //   earnings_per_share: Number, // 每股收益
  //   basic_earnings_per_share: Number, // 基本每股收益(元/股)
  //   diluted_earnings_per_share: Number, // 稀释每股收益(元/股)
  //   other_compr_income: Number, // 其他综合收益
  //   t_compr_income: Number, // 综合收益总额
  //   t_compr_income_attr_p: Number, // 归属于母公司所有者的综合收益总额
  //   t_compr_income_attr_ms: Number, // 归属于少数股东的综合收益总额
  // },
  // // 普通工商业
  // general: {
  //   code: String, // 股票代码
  //   date: Date, // 日期
  //   total_income: Number, // 营业总收入
  //   income: Number, // 营业收入
  //   total_costs: Number, // 营业总成本
  //   costs: Number, // 营业成本
  //   tax_surcharges: Number, // 营业税金及附加
  //   sales_expense: Number, // 销售费用
  //   management_costs: Number, // 管理费用
  //   financial_expenses: Number, // 财务费用
  //   asset_loss: Number, // 资产减值损失
  //   fair_value_change_income: Number, // 公允价值变动收益
  //   investment_income: Number, // 投资净收益
  //   jv_invest_income: Number, // 其中:对联营企业和合营企业的投资收益
  //   exchange_gains: Number, // 汇兑收益
  //   operating_profit: Number, // 营业利润
  //   plus_nop_income: Number, // 加:营业外收入
  //   less_nop_expenses: Number, // 减：营业外支出
  //   nca_disploss: Number, // 其中：非流动资产处置损失
  //   total_profit: Number, // 利润总额
  //   deduct_income_tax: Number, // 减：所得税费用
  //   net_profit: Number, // 净利润
  //   profits_to_pcom: Number, // 归属于母公司所有者的净利润
  //   minority_interest_income: Number, // 少数股东损益
  //   basic_earnings_per_share: Number, // 基本每股收益(元/股)
  //   diluted_earnings_per_share: Number, // 稀释每股收益(元/股)
  //   other_compr_income: Number, // 其他综合收益
  //   t_compr_income: Number, // 综合收益总额
  //   t_compr_income_attr_p: Number, // 归属于母公司所有者的综合收益总额
  //   t_compr_income_attr_ms: Number, // 归属于少数股东的综合收益总额
  // },
}, { autoCreate: true });

profitSchema.plugin(mongoosePaginate);
profitSchema.plugin(idPlugin);

const Profit = mongoose.model('Profit', profitSchema);

module.exports = Profit;
