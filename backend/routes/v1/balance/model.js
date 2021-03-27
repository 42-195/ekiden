const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

// 资产负债表
const balanceSchema = new mongoose.Schema({
  bank: {
    date: String, // 日期
    asset: {
      cash_deposit: String, // 现金及存放中央银行款项
      bank_deposit: String, // 存放同业款项
      lending_funds: String, // 拆出资金
      noble_metal: String, // 贵金属
      tfa: String, // 交易性金融资产
      dfia: String, // 衍生金融工具资产
      brfa: String, // 买入返售金融资产
      interest_receivable: String, // 应收利息
      loans_and_advances: String, // 发放贷款及垫款
      agency_business_assets: String, // 代理业务资产
      sellable_financial_assets: String, // 可供出售金融资产
      held_to_maturity_investment: String, // 持有至到期投资
      long_term_equity_investment: String, // 长期股权投资
      investment_receivables: String, // 应收投资款项
      total_fixed_assets: String, // 固定资产合计
      intangible_assets: String, // 无形资产
      goodwill: String, // 商誉
      deferred_tax_assets: String, // 递延税款借项
      investment_real_estate: String, // 投资性房地产
      other_assets: String, // 其他资产
      total_assets: String, // 资产总计
    },
    debts: {
      loan_from_central_bank: String, // 向中央银行借款
      interbank_deposit_withdrawal: String, // 同业存入及拆入
      interbank_deposits: String, // 其中:同业存放款项
      fund_withdrawal: String, // 拆入资金
      derivative_liabilities: String, // 衍生金融工具负债
      trading_financial_liabilities: String, // 交易性金融负债
      sell_buy_financial_assets: String, // 卖出回购金融资产款
      customer_deposit: String, // 客户存款(吸收存款)
      payable_remuneration: String, // 应付职工薪酬
      taxes_payable: String, // 应交税费
      interest_payable: String, // 应付利息
      accounts_payable: String, // 应付账款
      agency_liabilities: String, // 代理业务负债
      bonds_payable: String, // 应付债券
      deferred_tax_liability: String, // 递延所得税负债
      projected_liabilities: String, // 预计负债
      other_liabilities: String, // 其他负债
      total_liabilities: String, // 负债合计
    },
    equity: {
      share_capital: String, // 股本
      capital_accumulation_fund: String, // 资本公积金
      other_comprehensive_income: String, // 其他综合收益
      surplus_reserve_fund: String, // 盈余公积金金
      undistributed_profit: String, // 未分配利润
      general_risk_preparation: String, // 一般风险准备
      translation_reserve: String, // 外币报表折算差额
      total_sea_to_parent_company: String, // 归属于母公司的股东权益合计
      minority_equity: String, // 少数股东权益
      total_equity: String, // 所有者权益合计
      total_liabilities_and_equity: String, // 负债及股东权益总计
    },
  },
  insurance: {
    date: Date, // 日期
    asset: {
      money_funds: String, // 货币资金
      withdrawal_of_funds: String, // 拆出资金
      trading_financial_assets: String, // 交易性金融资产
      derivative_financial_assets: String, // 衍生金融资产
      buy_resale_financial_assets: String, // 买入返售金融资产
      premium_receivable: String, // 应收保费
      interest_receivable: String, // 应收利息
      receivables: String, // 应收分保账款
      responsible_undue_reserve: String, // 应收分保未到期责任准备金
      receivables_unpaid_reserve: String, // 应收分保未决赔款准备金
      responsible_life_reserve: String, // 应收分保寿险责任准备金
      responsible_long_term_reserve: String, // 应收分保长期健康险责任准备金
      policyholder_pledge_loan: String, // 保户质押贷款
      for_sale_financial_assets: String, // 可供出售金融资产
      held_to_maturity_investments: String, // 持有至到期投资
      long_term_equity_investment: String, // 长期股权投资
      deposit_capital_guarantee: String, // 存出资本保证金
      receivables_investment: String, // 应收款项类投资
      fixed_assets: String, // 固定资产
      intangible_assets: String, // 无形资产
      goodwill: String, // 商誉
      separate_account_assets: String, // 独立账户资产
      deferred_tax_assets: String, // 递延所得税资产
      investment_real_estate: String, // 投资性房地产
      time_deposit: String, // 定期存款
      other_assets: String, // 其他资产
      total_assets: String, // 资产总计
    },
    debts: {
      short_term_loan: String, // 短期借款
      unpacking_funds: String, // 拆入资金
      trading_fin_liabilities: String, // 交易性金融负债
      derivative_fin_liabilities: String, // 衍生金融负债
      sell_buy_fin_assets: String, // 卖出回购金融资产款
      advance_receipt: String, // 预收账款
      advance_payment: String, // 预收保费
      fees_and_commissions: String, // 应付手续费及佣金
      coping_with_reinsurance: String, // 应付分保账款
      payroll_payable: String, // 应付职工薪酬
      taxes_payable: String, // 应交税费
      interest_payable: String, // 应付利息
      payables: String, // 应付赔付款
      payable_policy_dividend: String, // 应付保单红利
      deposits_and_investment_funds: String, // 保户储金及投资款
      unexpired_liability_reserve: String, // 未到期责任准备金
      pending_claims_reserve: String, // 未决赔款准备金
      life_insurance_reserve: String, // 寿险责任准备金
      long_term_health_reserve: String, // 长期健康险责任准备金
      long_term_loan: String, // 长期借款
      bonds_payable: String, // 应付债券
      separate_account_liability: String, // 独立账户负债
      deferred_tax_liabilities: String, // 递延所得税负债
      estimated_liabilities: String, // 预计负债
      other_liabilities: String, // 其他负债
      total_liabilities: String, // 负债合计
    },
    equity: {
      share_capital: String, // 股本
      capital_accumulation_fund: String, // 资本公积金
      other_comprehensive_income: String, // 其他综合收益
      surplus_reserve_fund: String, // 盈余公积金金
      undistributed_profit: String, // 未分配利润
      general_risk_preparation: String, // 一般风险准备
      foreign_currency_trading_diff: String, // 外币报表折算差额
      total_sea_to_parent_company: String, // 归属于母公司的股东权益合计
      minority_shareholders_equity: String, // 少数股东权益
      total_equity: String, // 所有者权益合计
      total_liabilities_and_equity: String, // 负债及股东权益总计
    },
  },
  security: {
    date: Date, // 日期
    asset: {
      money_funds: String, // 货币资金
      customer_deposit: String, // 客户资金存款
      settlement_provisions: String, // 结算备付金
      customer_reserve_funds: String, // 客户备付金
      financing_funds: String, // 融出资金
      transactional_financial_assets: String, // 交易性金融资产
      derivative_financial_assets: String, // 衍生金融资产
      buy_resale_fin_assets: String, // 买入返售金融资产
      accounts_receivable: String, // 应收账款
      interest_receivable: String, // 应收利息
      refundable_deposits: String, // 存出保证金
      available_for_sale_fin_assets: String, // 可供出售金融资产
      held_to_maturity_investments: String, // 持有至到期投资
      long_term_equity_investment: String, // 长期股权投资
      fixed_assets: String, // 固定资产
      intangible_assets: String, // 无形资产
      trading_seat_fee: String, // 交易席位费
      goodwill: String, // 商誉
      deferred_tax_assets: String, // 递延所得税资产
      investment_real_estate: String, // 投资性房地产
      other_assets: String, // 投资性房地产
      total_assets: String, // 资产总计
    },
    debts: {
      short_term_loan: String, // 短期借款
      pledge_loan: String, // 质押借款
      coping_with_short_term_financing: String, // 应付短期融资款
      unpacking_funds: String, // 拆入资金
      trading_fin_liabilities: String, // 交易性金融负债
      derivative_fin_liabilities: String, // 衍生金融负债
      sell_repo_fin_assets: String, // 卖出回购金融资产款
      agent_trading_securities: String, // 代理买卖证券款
      agent_underwriting_securities: String, // 代理承销证券款
      payroll_payable: String, // 应付职工薪酬
      taxes_payable: String, // 应交税费
      accounts_payable: String, // 应付账款
      interest_payable: String, // 应付利息
      long_term_loan: String, // 长期借款
      bond_payable: String, // 应付债券款
      deferred_tax_liabilities: String, // 递延所得税负债
      estimated_liabilities: String, // 预计负债
      other_liabilities: String, // 其他负债
      total_liabilities: String, // 负债合计
    },
    equity: {
      share_capital: String, // 股本
      other_equity_instruments: String, // 其他权益工具
      capital_accumulation_fund: String, // 资本公积金
      treasury_shares: String, // 库存股
      other_comprehensive_income: String, // 其他综合收益
      surplus_reserve_fund: String, // 盈余公积金金
      undistributed_profit: String, // 未分配利润
      general_risk_preparation: String, // 一般风险准备
      trading_risk_preparation: String, // 交易风险准备
      translation_reserve: String, // 外币报表折算差额
      total_sea_to_parent_company: String, // 归属于母公司所有者权益合计
      minority_shareholders_equity: String, // 少数股东权益
      total_equity: String, // 所有者权益合计
      total_liabilities_and_equity: String, // 负债及股东权益总计
    },
  },
  general: {
    date: Date, // 日期
    current_assets: {
      monetary_capital: String, // 货币资金
      trading_fin_assets: String, // 交易性金融资产
      derivative_fin_assets: String, // 衍生金融资产
      receivables_amount: String, // 应收票据及应收账款
      bill_receivables: String, // 应收票据
      receivables: String, // 应收账款
      prepayment: String, // 预付款项
      interest_receivable: String, // 应收利息
      dividends_receivable: String, // 应收股利
      other_receivables: String, // 其他应收款
      repo_financial_asset: String, // 买入返售金融资产
      inventory: String, // 存货
      assets_held_for_sale: String, // 划分为持有待售的资产
      nc_assets_due_in_1year: String, // 一年内到期的非流动资产
      prepaid_expense: String, // 待摊费用
      unsettled: String, // 待处理流动资产损益
      other_current_assets: String, // 其他流动资产
      current_assets_amount: String, // 流动资产合计
    },
    illiquid_assets: {
      loans_and_payments: String, // 发放贷款及垫款
      sales_for_fin_asset: String, // 可供出售金融资产
      hold_investment_due: String, // 持有至到期投资
      long_term_receivables: String, // 长期应收款
      long_term_equity_investment: String, // 长期股权投资
      investment_property: String, // 投资性房地产
      net_fixed_assets: String, // 固定资产净额
      construction_in_process: String, // 在建工程
      engineering_material: String, // 工程物资
      liquidation_of_fixed_assets: String, // 固定资产清理
      productive_biological_assets: String, // 生产性生物资产
      non_profit_living_assets: String, // 公益性生物资产
      oil_and_gas_assets: String, // 油气资产
      intangible_assets: String, // 无形资产
      development_expenditure: String, // 开发支出
      goodwill: String, // 商誉
      deferred_assets: String, // 长期待摊费用
      deferred_tax_assets: String, // 递延所得税资产
      other_non_current_assets: String, // 其他非流动资产
      total_non_current_assets: String, // 非流动资产合计
      total_assets: String, // 资产总计
    },
    current_liabilities: {
      short_term_borrowing: String, // 短期借款
      trading_fin_liabilities: String, // 交易性金融负债
      notes_accounts_payable: String, // 应付票据及应付账款
      notes_payable: String, // 应付票据
      accounts_payable: String, // 应付账款
      advance_receipt: String, // 预收款项
      commission_payable: String, // 应付手续费及佣金
      payroll_payable: String, // 应付职工薪酬
      tax_payable: String, // 应交税费
      interest_payable: String, // 应付利息
      dividends_payable: String, // 应付股利
      other_payables: String, // 其他应付款
      accrued_expenses: String, // 预提费用
      deferred_earnings_in_1year: String, // 一年内的递延收益
      short_term_bond: String, // 应付短期债券
      nc_liabilities_due_in_1year: String, // 一年内到期的非流动负债
      other_current_liability: String, // 其他流动负债
      total_current_liability: String, // 流动负债合计
    },
    non_current_liability: {
      long_term_loan: String, // 长期借款
      bonds_payable: String, // 应付债券
      long_term_payable: String, // 长期应付款
      long_term_payroll_payable: String, // 长期应付职工薪酬
      special_payable: String, // 专项应付款
      estimated_nc_liabilities: String, // 预计非流动负债
      deferred_tax_liabilities: String, // 递延所得税负债
      long_term_deferred_earnings: String, // 长期递延收益
      other_nc_liabilities: String, // 其他非流动负债
      total_nc_liabilities: String, // 非流动负债合计
      total_liability: String, // 负债合计
    },
    owner_equity: {
      paid_up_or_share_capital: String, // 实收资本(或股本)
      capital_reserve: String, // 资本公积金
      less_treasury_shares: String, // 减：库存股
      other_comprehensive_income: String, // 其他综合收益
      special_reserves: String, // 专项储备
      surplus_reserve: String, // 盈余公积
      general_risk_preparation: String, // 一般风险准备
      undistributed_profit: String, // 未分配利润
      total_sea_to_parent_company: String, // 归属于母公司股东权益合计
      minority_shareholders_equity: String, // 少数股东权益
      total_equity: String, // 所有者权益(或股东权益)合计
      total_liabilities_and_equity: String, // 负债和所有者权益(或股东权益)总计
    },
  },
}, { autoCreate: true });

balanceSchema.plugin(mongoosePaginate);
balanceSchema.plugin(idPlugin);

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = Balance;
