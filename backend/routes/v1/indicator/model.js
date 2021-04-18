const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const indicatorSchema = new mongoose.Schema({
  code: String, // 股票代码
  date: Date, // 时间
  Diluted_EPS: Number, // 摊薄每股收益
  EPSWA: Number, // 加权每股收益
  AEPS: Number, // 每股收益_调整后
  EPS_NGOL: Number, // 扣除非经常性损益后的每股收益
  BPS: Number, // 每股净资产_调整前
  BPS_Adjusted: Number, // 每股净资产_调整后
  OCFPS: Number, // 每股经营性现金流
  CRPS: Number, // 每股资本公积金
  UDPPS: Number, // 每股未分配利润
  OROA: Number, // 总资产利润率
  OPE: Number, // 主营业务利润率
  PROA: Number, // 总资产净利润率
  ROPTC: Number, // 成本费用利润率
  OPR: Number, // 营业利润率
  COGSTS: Number, // 主营业务成本率
  PMOS: Number, // 销售净利率
  DOE: Number, // 股本报酬率
  ROC: Number, // 净资产报酬率
  ROA: Number, // 资产报酬率
  SGPR: Number, // 销售毛利率
  POTE: Number, // 三项费用比重
  NMP: Number, // 非主营比重
  POMP: Number, // 主营利润比重
  RR: Number, // 股息发放率
  ROI: Number, // 投资收益率
  GP: Number, // 主营业务利润(元)
  ROE: Number, // 净资产收益率
  ROEWA: Number, // 加权净资产收益率
  NPAD: Number, // 扣除非经常性损益后的净利润
  MBRG: Number, // 主营业务收入增长率
  NPGR: Number, // 净利润增长率
  GRNA: Number, // 净资产增长率
  GRTA: Number, // 总资产增长率
  ART: Number, // 应收账款周转率(次)
  DSO: Number, // 应收账款周转天数
  DSI: Number, // 存货周转天数
  RST: Number, // 存货周转率(次)
  TFA: Number, // 固定资产周转率(次)
  TATO: Number, // 总资产周转率(次)
  TATD: Number, // 总资产周转天数(天)
  CATA: Number, // 流动资产周转率(次)
  DCAT: Number, // 流动资产周转天数(天)
  AR: Number, // 流动比率
  QR: Number, // 速动比率
  CR: Number, // 现金比率(%)
  ICR: Number, // 利息支付倍数
  LDWCR: Number, // 长期债务与营运资金比率(%)
  EAR: Number, // 股东权益比率(%)
  LDR: Number, // 长期负债比率(%)
  REFA: Number, // 股东权益与固定资产比率(%)
  DER: Number, // 负债与所有者权益比率(%)
  RLALF: Number, // 长期资产与长期资金比率(%)
  MCR: Number, // 资本化比率(%)
  FANWR: Number, // 固定资产净值率(%)
  CIR: Number, // 资本固定化比率(%)
  ER: Number, // 产权比率(%)
  LVR: Number, // 清算价值比率(%)
  POFA: Number, // 固定资产比重(%)
  LEV: Number, // 资产负债率(%)
  ASSET: Number, // 总资产(元)
  NOCFTSR: Number, // 经营现金净流量对销售收入比率(%)
  ROOCFOA: Number, // 资产的经营现金流量回报率(%)
  NOCFTNP: Number, // 经营现金净流量与净利润的比率(%)
  NOCFTDR: Number, // 经营现金净流量对负债比率(%)
  CFR: Number, // 现金流量比率(%)
  // share_index: { // 每股指标
  //   Diluted_EPS: Number, // 摊薄每股收益
  //   EPSWA: Number, // 加权每股收益
  //   AEPS: Number, // 每股收益_调整后
  //   EPS_NGOL: Number, // 扣除非经常性损益后的每股收益
  //   BPS: Number, // 每股净资产_调整前
  //   BPS_Adjusted: Number, // 每股净资产_调整后
  //   OCFPS: Number, // 每股经营性现金流
  //   CRPS: Number, // 每股资本公积金
  //   UDPPS: Number, // 每股未分配利润
  // },
  // profitability: { // 盈利能力
  //   OROA: Number, // 总资产利润率
  //   OPE: Number, // 主营业务利润率
  //   PROA: Number, // 总资产净利润率
  //   ROPTC: Number, // 成本费用利润率
  //   OPR: Number, // 营业利润率
  //   COGSTS: Number, // 主营业务成本率
  //   PMOS: Number, // 销售净利率
  //   DOE: Number, // 股本报酬率
  //   ROC: Number, // 净资产报酬率
  //   ROA: Number, // 资产报酬率
  //   SGPR: Number, // 销售毛利率
  //   POTE: Number, // 三项费用比重
  //   NMP: Number, // 非主营比重
  //   POMP: Number, // 主营利润比重
  //   RR: Number, // 股息发放率
  //   ROI: Number, // 投资收益率
  //   GP: Number, // 主营业务利润(元)
  //   ROE: Number, // 净资产收益率
  //   ROEWA: Number, // 加权净资产收益率
  //   NPAD: Number, // 扣除非经常性损益后的净利润
  // },
  // growth_ability: { // 成长能力
  //   MBRG: Number, // 主营业务收入增长率
  //   NPGR: Number, // 净利润增长率
  //   GRNA: Number, // 净资产增长率
  //   GRTA: Number, // 总资产增长率
  // },
  // operation_ability: { // 营运能力
  //   ART: Number, // 应收账款周转率(次)
  //   DSO: Number, // 应收账款周转天数
  //   DSI: Number, // 存货周转天数
  //   RST: Number, // 存货周转率(次)
  //   TFA: Number, // 固定资产周转率(次)
  //   TATO: Number, // 总资产周转率(次)
  //   TATD: Number, // 总资产周转天数(天)
  //   CATA: Number, // 流动资产周转率(次)
  //   DCAT: Number, // 流动资产周转天数(天)
  // },
  // debt_decapital_structure: { // 偿债及资本结构
  //   AR: Number, // 流动比率
  //   QR: Number, // 速动比率
  //   CR: Number, // 现金比率(%)
  //   ICR: Number, // 利息支付倍数
  //   LDWCR: Number, // 长期债务与营运资金比率(%)
  //   EAR: Number, // 股东权益比率(%)
  //   LDR: Number, // 长期负债比率(%)
  //   REFA: Number, // 股东权益与固定资产比率(%)
  //   DER: Number, // 负债与所有者权益比率(%)
  //   RLALF: Number, // 长期资产与长期资金比率(%)
  //   MCR: Number, // 资本化比率(%)
  //   FANWR: Number, // 固定资产净值率(%)
  //   CIR: Number, // 资本固定化比率(%)
  //   ER: Number, // 产权比率(%)
  //   LVR: Number, // 清算价值比率(%)
  //   POFA: Number, // 固定资产比重(%)
  //   LEV: Number, // 资产负债率(%)
  //   ASSET: Number, // 总资产(元)
  // },
  // cash_flow: { // 现金流量
  //   NOCFTSR: Number, // 经营现金净流量对销售收入比率(%)
  //   ROOCFOA: Number, // 资产的经营现金流量回报率(%)
  //   NOCFTNP: Number, // 经营现金净流量与净利润的比率(%)
  //   NOCFTDR: Number, // 经营现金净流量对负债比率(%)
  //   CFR: Number, // 现金流量比率(%)
  // },
}, { autoCreate: true });

indicatorSchema.plugin(mongoosePaginate);
indicatorSchema.plugin(idPlugin);

const Indicator = mongoose.model('Indicator', indicatorSchema);

module.exports = Indicator;
