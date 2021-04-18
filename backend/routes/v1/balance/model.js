const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

// 资产负债表
const balanceSchema = new mongoose.Schema({
  code: String,
  date: Date,
  cash_deposit: Number, // 现金及存放中央银行款项
  bank_deposit: Number, // 存放同业款项
  lending_funds: Number, // 拆出资金
  noble_metal: Number, // 贵金属
  tfa: Number, // 交易性金融资产
  dfia: Number, // 衍生金融工具资产
  brfa: Number, // 买入返售金融资产
  interest_receivable: Number, // 应收利息
  loans_and_advances: Number, // 发放贷款及垫款
  agency_business_assets: Number, // 代理业务资产
  sellable_financial_assets: Number, // 可供出售金融资产
  held_to_maturity_investment: Number, // 持有至到期投资
  long_term_equity_investment: Number, // 长期股权投资
  investment_receivables: Number, // 应收投资款项
  total_fixed_assets: Number, // 固定资产合计
  intangible_assets: Number, // 无形资产
  goodwill: Number, // 商誉
  deferred_tax_assets: Number, // 递延税款借项
  investment_real_estate: Number, // 投资性房地产
  other_assets: Number, // 其他资产
  total_assets: Number, // 资产总计
  loan_from_central_bank: Number, // 向中央银行借款
  interbank_deposit_withdrawal: Number, // 同业存入及拆入
  interbank_deposits: Number, // 其中:同业存放款项
  fund_withdrawal: Number, // 拆入资金
  derivative_liabilities: Number, // 衍生金融工具负债
  trading_financial_liabilities: Number, // 交易性金融负债
  sell_buy_financial_assets: Number, // 卖出回购金融资产款
  customer_deposit: Number, // 客户存款(吸收存款)
  payable_remuneration: Number, // 应付职工薪酬
  taxes_payable: Number, // 应交税费
  interest_payable: Number, // 应付利息
  accounts_payable: Number, // 应付账款
  agency_liabilities: Number, // 代理业务负债
  bonds_payable: Number, // 应付债券
  deferred_tax_liability: Number, // 递延所得税负债
  projected_liabilities: Number, // 预计负债
  other_liabilities: Number, // 其他负债
  total_liabilities: Number, // 负债合计
  share_capital: Number, // 股本
  capital_accumulation_fund: Number, // 资本公积金
  other_comprehensive_income: Number, // 其他综合收益
  surplus_reserve_fund: Number, // 盈余公积金金
  undistributed_profit: Number, // 未分配利润
  general_risk_preparation: Number, // 一般风险准备
  translation_reserve: Number, // 外币报表折算差额
  total_sea_to_parent_company: Number, // 归属于母公司的股东权益合计
  minority_equity: Number, // 少数股东权益
  total_equity: Number, // 所有者权益合计
  total_liabilities_and_equity: Number, // 负债及股东权益总计
  money_funds: Number, // 货币资金
  withdrawal_of_funds: Number, // 拆出资金
  trading_financial_assets: Number, // 交易性金融资产
  derivative_financial_assets: Number, // 衍生金融资产
  buy_resale_financial_assets: Number, // 买入返售金融资产
  premium_receivable: Number, // 应收保费
  receivables: Number, // 应收分保账款
  responsible_undue_reserve: Number, // 应收分保未到期责任准备金
  receivables_unpaid_reserve: Number, // 应收分保未决赔款准备金
  responsible_life_reserve: Number, // 应收分保寿险责任准备金
  responsible_long_term_reserve: Number, // 应收分保长期健康险责任准备金
  policyholder_pledge_loan: Number, // 保户质押贷款
  for_sale_financial_assets: Number, // 可供出售金融资产
  held_to_maturity_investments: Number, // 持有至到期投资
  deposit_capital_guarantee: Number, // 存出资本保证金
  receivables_investment: Number, // 应收款项类投资
  fixed_assets: Number, // 固定资产
  separate_account_assets: Number, // 独立账户资产
  time_deposit: Number, // 定期存款
  short_term_loan: Number, // 短期借款
  unpacking_funds: Number, // 拆入资金
  trading_fin_liabilities: Number, // 交易性金融负债
  derivative_fin_liabilities: Number, // 衍生金融负债
  sell_buy_fin_assets: Number, // 卖出回购金融资产款
  advance_receipt: Number, // 预收账款
  advance_payment: Number, // 预收保费
  fees_and_commissions: Number, // 应付手续费及佣金
  coping_with_reinsurance: Number, // 应付分保账款
  payroll_payable: Number, // 应付职工薪酬
  payables: Number, // 应付赔付款
  payable_policy_dividend: Number, // 应付保单红利
  deposits_and_investment_funds: Number, // 保户储金及投资款
  unexpired_liability_reserve: Number, // 未到期责任准备金
  pending_claims_reserve: Number, // 未决赔款准备金
  life_insurance_reserve: Number, // 寿险责任准备金
  long_term_health_reserve: Number, // 长期健康险责任准备金
  long_term_loan: Number, // 长期借款
  separate_account_liability: Number, // 独立账户负债
  deferred_tax_liabilities: Number, // 递延所得税负债
  estimated_liabilities: Number, // 预计负债
  foreign_currency_trading_diff: Number, // 外币报表折算差额
  minority_shareholders_equity: Number, // 少数股东权益
  settlement_provisions: Number, // 结算备付金
  customer_reserve_funds: Number, // 客户备付金
  financing_funds: Number, // 融出资金
  transactional_financial_assets: Number, // 交易性金融资产
  buy_resale_fin_assets: Number, // 买入返售金融资产
  accounts_receivable: Number, // 应收账款
  refundable_deposits: Number, // 存出保证金
  available_for_sale_fin_assets: Number, // 可供出售金融资产
  trading_seat_fee: Number, // 交易席位费
  pledge_loan: Number, // 质押借款
  coping_with_short_term_financing: Number, // 应付短期融资款
  sell_repo_fin_assets: Number, // 卖出回购金融资产款
  agent_trading_securities: Number, // 代理买卖证券款
  agent_underwriting_securities: Number, // 代理承销证券款
  bond_payable: Number, // 应付债券款
  other_equity_instruments: Number, // 其他权益工具
  treasury_shares: Number, // 库存股
  trading_risk_preparation: Number, // 交易风险准备
  monetary_capital: Number, // 货币资金
  trading_fin_assets: Number, // 交易性金融资产
  derivative_fin_assets: Number, // 衍生金融资产
  receivables_amount: Number, // 应收票据及应收账款
  bill_receivables: Number, // 应收票据
  prepayment: Number, // 预付款项
  dividends_receivable: Number, // 应收股利
  other_receivables: Number, // 其他应收款
  repo_financial_asset: Number, // 买入返售金融资产
  inventory: Number, // 存货
  assets_held_for_sale: Number, // 划分为持有待售的资产
  nc_assets_due_in_1year: Number, // 一年内到期的非流动资产
  prepaid_expense: Number, // 待摊费用
  unsettled: Number, // 待处理流动资产损益
  other_current_assets: Number, // 其他流动资产
  current_assets_amount: Number, // 流动资产合计
  loans_and_payments: Number, // 发放贷款及垫款
  sales_for_fin_asset: Number, // 可供出售金融资产
  hold_investment_due: Number, // 持有至到期投资
  long_term_receivables: Number, // 长期应收款
  investment_property: Number, // 投资性房地产
  net_fixed_assets: Number, // 固定资产净额
  construction_in_process: Number, // 在建工程
  engineering_material: Number, // 工程物资
  liquidation_of_fixed_assets: Number, // 固定资产清理
  productive_biological_assets: Number, // 生产性生物资产
  non_profit_living_assets: Number, // 公益性生物资产
  oil_and_gas_assets: Number, // 油气资产
  development_expenditure: Number, // 开发支出
  deferred_assets: Number, // 长期待摊费用
  other_non_current_assets: Number, // 其他非流动资产
  total_non_current_assets: Number, // 非流动资产合计
  short_term_borrowing: Number, // 短期借款
  notes_accounts_payable: Number, // 应付票据及应付账款
  notes_payable: Number, // 应付票据
  commission_payable: Number, // 应付手续费及佣金
  tax_payable: Number, // 应交税费
  dividends_payable: Number, // 应付股利
  other_payables: Number, // 其他应付款
  accrued_expenses: Number, // 预提费用
  deferred_earnings_in_1year: Number, // 一年内的递延收益
  short_term_bond: Number, // 应付短期债券
  nc_liabilities_due_in_1year: Number, // 一年内到期的非流动负债
  other_current_liability: Number, // 其他流动负债
  total_current_liability: Number, // 流动负债合计
  long_term_payable: Number, // 长期应付款
  long_term_payroll_payable: Number, // 长期应付职工薪酬
  special_payable: Number, // 专项应付款
  estimated_nc_liabilities: Number, // 预计非流动负债
  long_term_deferred_earnings: Number, // 长期递延收益
  other_nc_liabilities: Number, // 其他非流动负债
  total_nc_liabilities: Number, // 非流动负债合计
  total_liability: Number, // 负债合计
  paid_up_or_share_capital: Number, // 实收资本(或股本)
  capital_reserve: Number, // 资本公积金
  less_treasury_shares: Number, // 减：库存股
  special_reserves: Number, // 专项储备
  surplus_reserve: Number, // 盈余公积

  // bank: [{
  //   code:String,
  //   asset: [{
  //     date:String, // 日期
  //     cash_deposit: Number|null, // 现金及存放中央银行款项
  //     bank_deposit: Number|null, // 存放同业款项
  //     lending_funds: Number|null, // 拆出资金
  //     noble_metal: Number|null, // 贵金属
  //     tfa: Number|null, // 交易性金融资产
  //     dfia: Number|null, // 衍生金融工具资产
  //     brfa: Number|null, // 买入返售金融资产
  //     interest_receivable: Number|null, // 应收利息
  //     loans_and_advances: Number|null, // 发放贷款及垫款
  //     agency_business_assets: Number|null, // 代理业务资产
  //     sellable_financial_assets: Number|null, // 可供出售金融资产
  //     held_to_maturity_investment: Number|null, // 持有至到期投资
  //     long_term_equity_investment: Number|null, // 长期股权投资
  //     investment_receivables: Number|null, // 应收投资款项
  //     total_fixed_assets: Number|null, // 固定资产合计
  //     intangible_assets: Number|null, // 无形资产
  //     goodwill: Number|null, // 商誉
  //     deferred_tax_assets: Number|null, // 递延税款借项
  //     investment_real_estate: Number|null, // 投资性房地产
  //     other_assets: Number|null, // 其他资产
  //     total_assets: Number|null, // 资产总计
  //   }],
  //   debts: [{
  //     date:String, // 日期
  //     loan_from_central_bank: Number|null, // 向中央银行借款
  //     interbank_deposit_withdrawal: Number|null, // 同业存入及拆入
  //     interbank_deposits: Number|null, // 其中:同业存放款项
  //     fund_withdrawal: Number|null, // 拆入资金
  //     derivative_liabilities: Number|null, // 衍生金融工具负债
  //     trading_financial_liabilities: Number|null, // 交易性金融负债
  //     sell_buy_financial_assets: Number|null, // 卖出回购金融资产款
  //     customer_deposit: Number|null, // 客户存款(吸收存款)
  //     payable_remuneration: Number|null, // 应付职工薪酬
  //     taxes_payable: Number|null, // 应交税费
  //     interest_payable: Number|null, // 应付利息
  //     accounts_payable: Number|null, // 应付账款
  //     agency_liabilities: Number|null, // 代理业务负债
  //     bonds_payable: Number|null, // 应付债券
  //     deferred_tax_liability: Number|null, // 递延所得税负债
  //     projected_liabilities: Number|null, // 预计负债
  //     other_liabilities: Number|null, // 其他负债
  //     total_liabilities: Number|null, // 负债合计
  //   }],
  //   equity: [{
  //     date:String, // 日期
  //     share_capital: Number|null, // 股本
  //     capital_accumulation_fund: Number|null, // 资本公积金
  //     other_comprehensive_income: Number|null, // 其他综合收益
  //     surplus_reserve_fund: Number|null, // 盈余公积金金
  //     undistributed_profit: Number|null, // 未分配利润
  //     general_risk_preparation: Number|null, // 一般风险准备
  //     translation_reserve: Number|null, // 外币报表折算差额
  //     total_sea_to_parent_company: Number|null, // 归属于母公司的股东权益合计
  //     minority_equity: Number|null, // 少数股东权益
  //     total_equity: Number|null, // 所有者权益合计
  //     total_liabilities_and_equity: Number|null, // 负债及股东权益总计
  //   }],
  // }],
  // insurance: [{
  //   code:String,
  //   asset: [{
  //     date: String, // 日期
  //     money_funds: Number|null, // 货币资金
  //     withdrawal_of_funds: Number|null, // 拆出资金
  //     trading_financial_assets: Number|null, // 交易性金融资产
  //     derivative_financial_assets: Number|null, // 衍生金融资产
  //     buy_resale_financial_assets: Number|null, // 买入返售金融资产
  //     premium_receivable: Number|null, // 应收保费
  //     interest_receivable: Number|null, // 应收利息
  //     receivables: Number|null, // 应收分保账款
  //     responsible_undue_reserve: Number|null, // 应收分保未到期责任准备金
  //     receivables_unpaid_reserve: Number|null, // 应收分保未决赔款准备金
  //     responsible_life_reserve: Number|null, // 应收分保寿险责任准备金
  //     responsible_long_term_reserve: Number|null, // 应收分保长期健康险责任准备金
  //     policyholder_pledge_loan: Number|null, // 保户质押贷款
  //     for_sale_financial_assets: Number|null, // 可供出售金融资产
  //     held_to_maturity_investments: Number|null, // 持有至到期投资
  //     long_term_equity_investment: Number|null, // 长期股权投资
  //     deposit_capital_guarantee: Number|null, // 存出资本保证金
  //     receivables_investment: Number|null, // 应收款项类投资
  //     fixed_assets: Number|null, // 固定资产
  //     intangible_assets: Number|null, // 无形资产
  //     goodwill: Number|null, // 商誉
  //     separate_account_assets: Number|null, // 独立账户资产
  //     deferred_tax_assets: Number|null, // 递延所得税资产
  //     investment_real_estate: Number|null, // 投资性房地产
  //     time_deposit: Number|null, // 定期存款
  //     other_assets: Number|null, // 其他资产
  //     total_assets: Number|null, // 资产总计
  //   }],
  //   debts: [{
  //     date: String, // 日期
  //     short_term_loan: Number|null, // 短期借款
  //     unpacking_funds: Number|null, // 拆入资金
  //     trading_fin_liabilities: Number|null, // 交易性金融负债
  //     derivative_fin_liabilities: Number|null, // 衍生金融负债
  //     sell_buy_fin_assets: Number|null, // 卖出回购金融资产款
  //     advance_receipt: Number|null, // 预收账款
  //     advance_payment: Number|null, // 预收保费
  //     fees_and_commissions: Number|null, // 应付手续费及佣金
  //     coping_with_reinsurance: Number|null, // 应付分保账款
  //     payroll_payable: Number|null, // 应付职工薪酬
  //     taxes_payable: Number|null, // 应交税费
  //     interest_payable: Number|null, // 应付利息
  //     payables: Number|null, // 应付赔付款
  //     payable_policy_dividend: Number|null, // 应付保单红利
  //     deposits_and_investment_funds: Number|null, // 保户储金及投资款
  //     unexpired_liability_reserve: Number|null, // 未到期责任准备金
  //     pending_claims_reserve: Number|null, // 未决赔款准备金
  //     life_insurance_reserve: Number|null, // 寿险责任准备金
  //     long_term_health_reserve: Number|null, // 长期健康险责任准备金
  //     long_term_loan: Number|null, // 长期借款
  //     bonds_payable: Number|null, // 应付债券
  //     separate_account_liability: Number|null, // 独立账户负债
  //     deferred_tax_liabilities: Number|null, // 递延所得税负债
  //     estimated_liabilities: Number|null, // 预计负债
  //     other_liabilities: Number|null, // 其他负债
  //     total_liabilities: Number|null, // 负债合计
  //   }],
  //   equity: [{
  //     date: String, // 日期
  //     share_capital: Number|null, // 股本
  //     capital_accumulation_fund: Number|null, // 资本公积金
  //     other_comprehensive_income: Number|null, // 其他综合收益
  //     surplus_reserve_fund: Number|null, // 盈余公积金金
  //     undistributed_profit: Number|null, // 未分配利润
  //     general_risk_preparation: Number|null, // 一般风险准备
  //     foreign_currency_trading_diff: Number|null, // 外币报表折算差额
  //     total_sea_to_parent_company: Number|null, // 归属于母公司的股东权益合计
  //     minority_shareholders_equity: Number|null, // 少数股东权益
  //     total_equity: Number|null, // 所有者权益合计
  //     total_liabilities_and_equity: Number|null, // 负债及股东权益总计
  //   }],
  // }],
  // security: [{
  //   code:String,
  //   asset: [{
  //     date: String, // 日期
  //     money_funds: Number|null, // 货币资金
  //     customer_deposit: Number|null, // 客户资金存款
  //     settlement_provisions: Number|null, // 结算备付金
  //     customer_reserve_funds: Number|null, // 客户备付金
  //     financing_funds: Number|null, // 融出资金
  //     transactional_financial_assets: Number|null, // 交易性金融资产
  //     derivative_financial_assets: Number|null, // 衍生金融资产
  //     buy_resale_fin_assets: Number|null, // 买入返售金融资产
  //     accounts_receivable: Number|null, // 应收账款
  //     interest_receivable: Number|null, // 应收利息
  //     refundable_deposits: Number|null, // 存出保证金
  //     available_for_sale_fin_assets: Number|null, // 可供出售金融资产
  //     held_to_maturity_investments: Number|null, // 持有至到期投资
  //     long_term_equity_investment: Number|null, // 长期股权投资
  //     fixed_assets: Number|null, // 固定资产
  //     intangible_assets: Number|null, // 无形资产
  //     trading_seat_fee: Number|null, // 交易席位费
  //     goodwill: Number|null, // 商誉
  //     deferred_tax_assets: Number|null, // 递延所得税资产
  //     investment_real_estate: Number|null, // 投资性房地产
  //     other_assets: Number|null, // 投资性房地产
  //     total_assets: Number|null, // 资产总计
  //   }],
  //   debts: [{
  //     date: String, // 日期
  //     short_term_loan: Number|null, // 短期借款
  //     pledge_loan: Number|null, // 质押借款
  //     coping_with_short_term_financing: Number|null, // 应付短期融资款
  //     unpacking_funds: Number|null, // 拆入资金
  //     trading_fin_liabilities: Number|null, // 交易性金融负债
  //     derivative_fin_liabilities: Number|null, // 衍生金融负债
  //     sell_repo_fin_assets: Number|null, // 卖出回购金融资产款
  //     agent_trading_securities: Number|null, // 代理买卖证券款
  //     agent_underwriting_securities: Number|null, // 代理承销证券款
  //     payroll_payable: Number|null, // 应付职工薪酬
  //     taxes_payable: Number|null, // 应交税费
  //     accounts_payable: Number|null, // 应付账款
  //     interest_payable: Number|null, // 应付利息
  //     long_term_loan: Number|null, // 长期借款
  //     bond_payable: Number|null, // 应付债券款
  //     deferred_tax_liabilities: Number|null, // 递延所得税负债
  //     estimated_liabilities: Number|null, // 预计负债
  //     other_liabilities: Number|null, // 其他负债
  //     total_liabilities: Number|null, // 负债合计
  //   }],
  //   equity: [{
  //     date: String, // 日期
  //     share_capital: Number|null, // 股本
  //     other_equity_instruments: Number|null, // 其他权益工具
  //     capital_accumulation_fund: Number|null, // 资本公积金
  //     treasury_shares: Number|null, // 库存股
  //     other_comprehensive_income: Number|null, // 其他综合收益
  //     surplus_reserve_fund: Number|null, // 盈余公积金金
  //     undistributed_profit: Number|null, // 未分配利润
  //     general_risk_preparation: Number|null, // 一般风险准备
  //     trading_risk_preparation: Number|null, // 交易风险准备
  //     translation_reserve: Number|null, // 外币报表折算差额
  //     total_sea_to_parent_company: Number|null, // 归属于母公司所有者权益合计
  //     minority_shareholders_equity: Number|null, // 少数股东权益
  //     total_equity: Number|null, // 所有者权益合计
  //     total_liabilities_and_equity: Number|null, // 负债及股东权益总计
  //   }],
  // }],
  // general: [{
  //   code:String,
  //   current_assets: [{
  //     date: String, // 日期
  //     monetary_capital: Number|null, // 货币资金
  //     trading_fin_assets: Number|null, // 交易性金融资产
  //     derivative_fin_assets: Number|null, // 衍生金融资产
  //     receivables_amount: Number|null, // 应收票据及应收账款
  //     bill_receivables: Number|null, // 应收票据
  //     receivables: Number|null, // 应收账款
  //     prepayment: Number|null, // 预付款项
  //     interest_receivable: Number|null, // 应收利息
  //     dividends_receivable: Number|null, // 应收股利
  //     other_receivables: Number|null, // 其他应收款
  //     repo_financial_asset: Number|null, // 买入返售金融资产
  //     inventory: Number|null, // 存货
  //     assets_held_for_sale: Number|null, // 划分为持有待售的资产
  //     nc_assets_due_in_1year: Number|null, // 一年内到期的非流动资产
  //     prepaid_expense: Number|null, // 待摊费用
  //     unsettled: Number|null, // 待处理流动资产损益
  //     other_current_assets: Number|null, // 其他流动资产
  //     current_assets_amount: Number|null, // 流动资产合计
  //   }],
  //   illiquid_assets: [{
  //     date: String, // 日期
  //     loans_and_payments: Number|null, // 发放贷款及垫款
  //     sales_for_fin_asset: Number|null, // 可供出售金融资产
  //     hold_investment_due: Number|null, // 持有至到期投资
  //     long_term_receivables: Number|null, // 长期应收款
  //     long_term_equity_investment: Number|null, // 长期股权投资
  //     investment_property: Number|null, // 投资性房地产
  //     net_fixed_assets: Number|null, // 固定资产净额
  //     construction_in_process: Number|null, // 在建工程
  //     engineering_material: Number|null, // 工程物资
  //     liquidation_of_fixed_assets: Number|null, // 固定资产清理
  //     productive_biological_assets: Number|null, // 生产性生物资产
  //     non_profit_living_assets: Number|null, // 公益性生物资产
  //     oil_and_gas_assets: Number|null, // 油气资产
  //     intangible_assets: Number|null, // 无形资产
  //     development_expenditure: Number|null, // 开发支出
  //     goodwill: Number|null, // 商誉
  //     deferred_assets: Number|null, // 长期待摊费用
  //     deferred_tax_assets: Number|null, // 递延所得税资产
  //     other_non_current_assets: Number|null, // 其他非流动资产
  //     total_non_current_assets: Number|null, // 非流动资产合计
  //     total_assets: Number|null, // 资产总计
  //   }],
  //   current_liabilities: [{
  //     date: String, // 日期
  //     short_term_borrowing: Number|null, // 短期借款
  //     trading_fin_liabilities: Number|null, // 交易性金融负债
  //     notes_accounts_payable: Number|null, // 应付票据及应付账款
  //     notes_payable: Number|null, // 应付票据
  //     accounts_payable: Number|null, // 应付账款
  //     advance_receipt: Number|null, // 预收款项
  //     commission_payable: Number|null, // 应付手续费及佣金
  //     payroll_payable: Number|null, // 应付职工薪酬
  //     tax_payable: Number|null, // 应交税费
  //     interest_payable: Number|null, // 应付利息
  //     dividends_payable: Number|null, // 应付股利
  //     other_payables: Number|null, // 其他应付款
  //     accrued_expenses: Number|null, // 预提费用
  //     deferred_earnings_in_1year: Number|null, // 一年内的递延收益
  //     short_term_bond: Number|null, // 应付短期债券
  //     nc_liabilities_due_in_1year: Number|null, // 一年内到期的非流动负债
  //     other_current_liability: Number|null, // 其他流动负债
  //     total_current_liability: Number|null, // 流动负债合计
  //   }],
  //   non_current_liability: [{
  //     date: String, // 日期
  //     long_term_loan: Number|null, // 长期借款
  //     bonds_payable: Number|null, // 应付债券
  //     long_term_payable: Number|null, // 长期应付款
  //     long_term_payroll_payable: Number|null, // 长期应付职工薪酬
  //     special_payable: Number|null, // 专项应付款
  //     estimated_nc_liabilities: Number|null, // 预计非流动负债
  //     deferred_tax_liabilities: Number|null, // 递延所得税负债
  //     long_term_deferred_earnings: Number|null, // 长期递延收益
  //     other_nc_liabilities: Number|null, // 其他非流动负债
  //     total_nc_liabilities: Number|null, // 非流动负债合计
  //     total_liability: Number|null, // 负债合计
  //   }],
  //   owner_equity: [{
  //     date: String, // 日期
  //     paid_up_or_share_capital: Number|null, // 实收资本(或股本)
  //     capital_reserve: Number|null, // 资本公积金
  //     less_treasury_shares: Number|null, // 减：库存股
  //     other_comprehensive_income: Number|null, // 其他综合收益
  //     special_reserves: Number|null, // 专项储备
  //     surplus_reserve: Number|null, // 盈余公积
  //     general_risk_preparation: Number|null, // 一般风险准备
  //     undistributed_profit: Number|null, // 未分配利润
  //     total_sea_to_parent_company: Number|null, // 归属于母公司股东权益合计
  //     minority_shareholders_equity: Number|null, // 少数股东权益
  //     total_equity: Number|null, // 所有者权益(或股东权益)合计
  //     total_liabilities_and_equity: Number|null, // 负债和所有者权益(或股东权益)总计
  //   }],
  // }],
}, { autoCreate: true });

balanceSchema.plugin(mongoosePaginate);
balanceSchema.plugin(idPlugin);

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = Balance;
