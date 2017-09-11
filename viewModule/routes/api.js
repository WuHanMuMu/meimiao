const express = require('express');
const router = express.Router();
const proxy = require('../proxy/proxy');
/* GET users listing. */
router.use((req, res, next) => {
  // res.send('respond with a resource');
  // 测试一下,能不能出接口
  console.log('测试一下,能不能出接口');
  next();
});
router.route('/ceshi')
  .get(proxy.start);

module.exports = router;
