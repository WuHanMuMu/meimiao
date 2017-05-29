var express = require('express');
var router = express.Router();

/* GET home page. */
// 第三个参数next 可以省略
router.get('/', (req, res) => {
  res.render('index', { title: '数据添加展示页' });
});

module.exports = router;
