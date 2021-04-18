module.exports = function (boadCodes) {
  // 银行BK0475、保险BK0474、证券BK0473、普通工商业
  // bank:银行，insurance:保险，security:证券, general:普通工商业
  let type = 'general';
  if (boadCodes.findIndex((c) => c === 'BK0475') !== -1) {
    type = 'bank';
  }
  if (boadCodes.findIndex((c) => c === 'BK0474') !== -1) {
    type = 'insurance';
  }
  if (boadCodes.findIndex((c) => c === 'BK0473') !== -1) {
    type = 'security';
  }
  return type;
};
