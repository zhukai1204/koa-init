import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// 定义TodoSchema数据表和数据结构
const TodoSchema = new Schema({
  content: { type: String, required: true },
  complete: { type: Boolean, required: true, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user: { type: String, required: true, default: 'luck' }
});

// 使用content字段作为索引
TodoSchema.index({content: 1});
// 使用Todo名称来调用表
export default mongoose.model('Todo', TodoSchema);
