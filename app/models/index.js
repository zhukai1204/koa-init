import mongoose from 'mongoose';

mongoose.Promise = Promise;
// 事先创建了名为db的数据库
mongoose.connect('mongodb://127.0.0.1:27017/db', function (err) {
  if (err) {
    console.error('connect to %s error: ', 'db', err.message);
    process.exit(1);
  }
});

import Todo from './todo';
export default {Todo};