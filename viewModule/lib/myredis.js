/**
 * Created by dell on 2017/5/29.
 * author zhupenghui
 */
const Redis = require('ioredis');

exports.start = () => {
  const myRedis = new Redis('redis://:C19prsPjHs52CHoA0vm@192.168.0.101:6379/14', {
    reconnectOnError(err) {
      return err.message.slice(0, 'READONLY'.length) === 'READONLY';
    }
  });
  if (myRedis === true) {
    return 'error';
  }
  return myRedis;
};

