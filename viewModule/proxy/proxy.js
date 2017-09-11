/**
 * Created by dell on 2017/6/12.
 */
const redis = require('../lib/myredis').start('192.168.1.31:6379', 4);
const request = require('request');
const async = require('async');

const getProxy = (length, callback) => {
  const proxyArr = [],
    options = {
      url: 'http://dev.kuaidaili.com/api/getproxy/?orderid=958272362426814&num=50&protocol=1&method=1&an_an=1&an_ha=1&sp1=1&sp2=1&f_pr=1&quality=1&format=json&sep=1'
    };
  let i = 0;
  request(options, (error, res, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (res.statusCode !== 200) {
      callback(`proxyStatus: ${res.statusCode}`);
      return;
    }
    try {
      body = JSON.parse(body);
    } catch (e) {
      callback(e);
      return;
    }
    let proxy = '';
    async.whilst(
      () => i < body.data.proxy_list.length,
      (cb) => {
        proxy = body.data.proxy_list[i].toLowerCase().split(',');
        proxy = `${proxy[1]}://${proxy[0]}`;
        redis.sadd('proxy1', proxy);
        i += 1;
        cb();
      },
      () => {
        callback(null, proxyArr);
      }
    );
  });
};
const singProxy = (proxy, callback) => {
  let i = 0;
  async.whilst(
    () => i < proxy.length,
    (cb) => {
      // redis
    },
    () => {}
  );
};
exports.start = (req, res) => {
  if (redis === 'error') {
    res.status(404).json({ status: 404, error: '数据获取失败' });
    return;
  }
  redis.smembers('proxy1', (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(404).json({ status: 404, error: '代理列表长度获取失败' });
      return;
    }
    if (!result) {
      // getProxy(result, (error, _proxy) => {
      //   if (error) {
      //     res.status(404).json({ status: 404, error: '代理获取失败' });
      //     return;
      //   }
      //   res.status(200).end(JSON.stringify({ status: 'OK', proxy: _proxy }));
      // });
    }
    singProxy(result, (error, _proxy) => {
      if (error) {
        res.status(404).json({ status: 404, error: '代理获取失败' });
        return;
      }
      res.status(200).end(JSON.stringify({ status: 'OK', proxy: _proxy }));
    });
  });
};
