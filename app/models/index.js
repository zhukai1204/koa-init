import mongoose from 'mongoose';

mongoose.Promise = Promise;
// 事先创建了名为koa2-todo的数据库
mongoose.connect('mongodb://127.0.0.1:27017/koa2-todo', function (err) {
  if (err) {
    console.error('connect to %s error: ', 'koa2-todo', err.message);
    process.exit(1);
  }
});

import Todo from './todo';
export default {Todo};