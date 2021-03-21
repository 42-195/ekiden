const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const idPlugin = require('mongoose-id');

const boardSchema = new mongoose.Schema({
  // 行业代码
  code: String,
  // 行业名称
  name: String,
  // 区分板块类型，industry行业板块、concept概念板块、area地域板块
  type: {
    type: String,
    enum: ['industry', 'concept', 'area'],
  },
}, { autoCreate: true });

boardSchema.plugin(mongoosePaginate);
boardSchema.plugin(idPlugin);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
