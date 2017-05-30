/**
 * Created by dell on 2017/5/29.
 * author zhupenghui
 */
// const platformModule = require('../module/platformModule.html');

const desc = '用户在搜索框中添加一个播放的详情页地址就可以获取到这个上传用户的名称和ID（仅限已支持的平台）';

const Child = {
  template: '<div><p>请输入一个视频平台的播放详情页链接（仅限已支持的平台）</p><input type="text" placeholder="请输入一个播放链接"/></div>'
};

const tableData = [{
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}, {
  platform: '优酷',
  name: '自媒体',
  bid: '123456789',
  avatar: 'ceshi.jpg'
}];

const vm = new Vue({
  el: '#app',
  components: {
    'my-bid': Child
  },
  data: {
    desc,
    input: '',
    tableData
  },
  methods: {
    ceshi: function(val) {
      console.log(val);
      this.loading = false;
    },
    refresh(){
      this.loading = true;
    }
  },
  created(){
    this.refresh()
  }
});
