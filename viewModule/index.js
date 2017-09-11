/**
 * Created by dell on 2017/5/29.
 * author Zhu Penghui
 */
const app = require('./app');
const http = require('http');
const redis = require('./lib/myredis').start('192.168.1.31:6379', 14);

let logger;
class view {
  constructor(settings) {
    this.settings = settings;
    logger = settings.logger;
    logger.debug('数据显示模块启动');
  }
  assembly() {
    if (redis === 'error') {
      logger.debug('数据库连接失败');
      process.exit();
      return;
    }
    logger.debug('数据库连接成功');
  }
  start() {
    app.set('port', this.settings.port);
    http.createServer(app).listen(this.settings.port);
    logger.debug(`端口：${this.settings.port}`);
    this.assembly();
  }
}
module.exports = view;
